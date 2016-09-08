"use strict";
var express = require('express');
var app = express();
var path = require('path');
var mustacheExpress = require('mustache-express');

var Memcached = require('memcached');
// var memcached = new Memcached('192.168.99.100:11211', {
//     timeout: 5000
// });
var memcached = new Memcached('web-cluster.acg4mh.0001.use1.cache.amazonaws.com:11211', {
    timeout: 5000
});


app.set('views', path.resolve(__dirname, './views'));

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 3001));


// Initialize modules
var random = require('./src/randomService')();
var evilService = require('./src/evilService')({
    random: random,
    cache: memcached
});


app.get('/', function (req, res) {
    let evil = evilService.newEvil();
    let newEvil = evilService.newEvil();
    let totalEvil = evilService.totalEvils();
    let evilsDone = evilService.evilsDone();
    res.render('index', {
        data: evil,
        online: 1,
        newEvil: newEvil,
        totalEvil: totalEvil,
        evilsDone: evilsDone
    });
});

app.post('/:friendly_url', function (req, res) {

    evilService.doEvil(req.params.friendly_url, function (err) {
        if (err) {
            console.error(err);
            res.status(500)
        }else {
            res.status(200)
        }
    });
});

app.get('/favicon.ico', function (req, res) {

})

app.get('/:friendly_url', function (req, res) {
    evilService.findByFriendlyURL(req.params.friendly_url, function (err, evil) {
        if(err){
            console.error(err);
            res.status(500);
        }else {
            var newEvil = evilService.newEvil();
            let totalEvil = evilService.totalEvils();
            let evilsDone = evilService.evilsDone();
            res.render('index', {
                data: evil,
                online: 1,
                newEvil: newEvil,
                totalEvil: totalEvil,
                evilsDone: evilsDone
            });
        }
    });

});

var caching = function () {
    console.log("CACHING");
    memcached.get('foo', function (err, data) {
        console.log(data);
    });
};

app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port'));
});