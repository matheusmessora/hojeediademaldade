"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var express = require('express');
var app = express();

// midlewares
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path');
var mustacheExpress = require('mustache-express');

// MEMCACHE
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

// enable body JSON
app.use(bodyParser());

// enable cookies parsing
app.use(cookieParser())

// Initialize modules
var random = require('./src/randomService')();
var evilService = require('./src/evilService')({
    random: random,
    cache: memcached
});
var fbService = require('./src/fbService')({
    cache: memcached
});
var sugestionService = require('./src/sugestionService')({
    cache: memcached
});


app.get('/', function (req, res) {
    evilService.newEvil(null, function(err, evil){
        evilService.newEvil(err, function(err, nextEvil){
            getData(err, res, evil, nextEvil);
        })
    })
});

app.post('/social', function (req, res) {

    fbService.save(req.body, function(err){
        if(err) {
            console.error(err);
            res.sendStatus(500)
        }else {
            res.sendStatus(200)
        }
    })
});

app.post('/sugestion', function (req, res) {

    sugestionService.save(req.body, function(err){
        if(err) {
            console.error(err);
            res.sendStatus(500)
        }else {
            res.sendStatus(200)
        }
    })
});

app.get('/sugestion/:id', function (req, res) {

    sugestionService.getByID(req.params.id, function(err, data){
        if(err) {
            console.error(err);
            res.sendStatus(500)
        }else {
            res.json(data)
        }
    })
});

app.get('/social/:id', function (req, res) {

    fbService.getByID(req.params.id, function(err, data){
        if(err) {
            console.error(err);
            res.sendStatus(500)
        }else {
            res.json(data)
        }
    })
});


app.get('/maldades', function(req, res){
    res.render('maldades', {
        evils: evilService.getData
    });
})

app.get('/privacidade', function(req, res){
    res.render('privacidade', {});
})


app.get('/:friendly_url', function (req, res) {
    let totalEvil = evilService.totalEvils();

    evilService.findByFriendlyURL(req.params.friendly_url, function (err, evil) {
        if(err){
            console.error("err", err);
            res.sendStatus(500);
        }else {
            var hits = req.cookies.hits;
            console.log("[COOKIES] hits", hits)
            if(hits && hits % 5 === 0){
                evilService.getAd(function (err, nextEvil) {
                    getData(err, res, evil, nextEvil);
                });
            }else {
                evilService.newEvil(null, function(err, nextEvil){
                    getData(err, res, evil, nextEvil);
                })
            }
        }
    });

});


function getData(err, res, evil, nextEvil){
    var page = 'index';

    if(evil.adpage){
        page = evil.adpage;
    }

    res.render(page, {
        data: evil,
        online: 1,
        newEvil: nextEvil,
        totalEvil: 0,
        evilsDone: 0
    });
}

app.listen(app.get('port'), function () {
    console.log('APP STARTED. NODE_ENV=' + process.env.NODE_ENV);
    console.log('Listening on port ' + app.get('port'));
});