"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var express = require('express');
var app = express();

// midlewares
var cookieParser = require('cookie-parser')
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

// enable cookies parsing
app.use(cookieParser())

// Initialize modules
var random = require('./src/randomService')();
var evilService = require('./src/evilService')({
    random: random,
    cache: memcached
});
var ipService = require('./src/ipService')({
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

    ipService.countIPevil(req.connection.remoteAddress, function(err, hits){
        if(err) {
            console.error(err);
            res.sendStatus(500)
        }else {
            if(hits < 300) {
                evilService.doEvil(req.params.friendly_url, function (err) {
                    if (err) {
                        console.error(err);
                        res.sendStatus(500)
                    }else {
                        res.sendStatus(200)
                    }
                });
            }else {
                console.log("Too many hits.", req.connection.remoteAddress, hits)
            }
        }

    })
});


app.get('/maldades', function(req, res){
    res.render('maldades', {
        evils: evilService.getData
    });
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
            if(hits && hits % 3 === 0){
                evilService.findByFriendlyURL("ganhar-desconto-na-magazine-luiza", function (err, nextEvil) {
                    getData(err, evil, nextEvil);
                });
            }else {
                evilService.newEvil(null, function(err, nextEvil){
                    getData(err, evil, nextEvil);
                })
            }
        }
    });

    function getData(err, evil, nextEvil){
        evilService.evilsDone(err, function(err, evilsDone) {
            var page = 'index';

            if(evil.adpage){
                page = evil.adpage;
            }

            res.render(page, {
                data: evil,
                online: 1,
                newEvil: nextEvil,
                totalEvil: totalEvil,
                evilsDone: evilsDone
            });
        });
    }
});

app.listen(app.get('port'), function () {
    console.log('APP STARTED. NODE_ENV=' + process.env.NODE_ENV);
    console.log('Listening on port ' + app.get('port'));
});