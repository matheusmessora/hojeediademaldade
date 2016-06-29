var express = require('express');
var app = express();
var path = require('path');
var mustacheExpress = require('mustache-express');

app.set('views', path.resolve(__dirname, './views'));

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


var data = [
  {
    trackId: "INSTALL-BAIDU",
    title: "instalar o BAIDU!",
    img: "http://antivirus.baidu.com/r/image/2014-08-25/22a52239c422616442d2c35540ff1361.jpg"
  },
  {
    trackId: "UBER-TAXI",
    title: "chamar um 99taxis e um Uber ao mesmo tempo!",
    img: "http://sorrisosdesucesso.com/wp-content/uploads/2015/12/Uber-v-Taxi.jpg"
  },
  {
    trackId: "WHILE-TRUE",
    title: "fazer WHILE true",
    img: "http://customize.org/thumbnails/larger/96648.jpg"
  },
  {
    trackId: "ABRIR-IE",
    title: "abrir o IE",
    img: "http://blog.speedexam.net/wp-content/uploads/2015/05/ie_8_rc1.jpg"
  }
];

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


app.get('/', function (req, res) {

  var random = getRandomInt(0,data.length);
  res.render('index', data[random]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});