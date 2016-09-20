"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var express = require('express');

var app = express();
var path = require('path');
var mustacheExpress = require('mustache-express');

var Memcached = require('memcached');
var ConfigService = require('./src/config'),
    conf = new ConfigService();
var memcached = new Memcached(conf.memcached.ip, {
    timeout: 5000
});

app.set('views', path.resolve(__dirname, './views'));

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 3001));
app.use(express.static('public'));

// Initialize modules
var random = require('./src/randomService')();
var evilService = require('./src/evilService')({
    random: random,
    cache: memcached
});


app.get('/', function (req, res) {
    let totalEvil = evilService.totalEvils();

    evilService.newEvil(null, function(err, evil){
        evilService.newEvil(err, function(err, nextEvil){
            evilService.evilsDone(err, function(err, evilsDone) {
                res.render('index', {
                    data: evil,
                    online: 1,
                    newEvil: nextEvil,
                    totalEvil: totalEvil,
                    evilsDone: evilsDone
                });
            });
        })
    })
});

app.post('/:friendly_url', function (req, res) {

    evilService.doEvil(req.params.friendly_url, function (err) {
        if (err) {
            console.error(err);
            res.sendStatus(500)
        }else {
            res.sendStatus(200)
        }
    });

});

app.get('/favicon.ico', function (req, res) {
    res.sendStatus(404)
})

app.get('/flushall', function (req, res) {
    cache.flushAll(function(err ){
        if(err) res.sendStatus(500);
        cache.set("evilsDone", 0, 0, function(err){
            if(err) res.sendStatus(500);
            res.sendStatus(201);
        });
    });
})

app.get('/maldades', function(req, res){
    res.render('maldades', {
        evils: evilService.getData
    });
})


app.get('/:friendly_url', function (req, res) {
    evilService.findByFriendlyURL(req.params.friendly_url, function (err, evil) {
        if(err){
            console.error("err", err);
            res.sendStatus(500);
        }else {
            let totalEvil = evilService.totalEvils();
            evilService.newEvil(err, function(err, nextEvil){
                evilService.evilsDone(err, function(err, evilsDone) {
                    res.render('index', {
                        data: evil,
                        online: 1,
                        newEvil: nextEvil,
                        totalEvil: totalEvil,
                        evilsDone: evilsDone
                    });
                });
            })
        }
    });

});

app.listen(app.get('port'), function () {
    console.log('APP STARTED. NODE_ENV=' + process.env.NODE_ENV);
    console.log('Listening on port ' + app.get('port'));
});