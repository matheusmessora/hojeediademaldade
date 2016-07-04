"use strict";
var express = require('express');
var app = express();
var path = require('path');
var mustacheExpress = require('mustache-express');


app.set('views', path.resolve(__dirname, './views'));

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 3001));


// Initialize modules
var random = require('./src/randomService')();
var evilService = require('./src/evilService')({
  random: random
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
  evilService.doEvil(req.params.friendly_url);

  res.status(200);
});

app.get('/:friendly_url', function (req, res) {
  var evil = evilService.findByFriendlyURL(req.params.friendly_url);
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
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});