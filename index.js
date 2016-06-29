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
    img: "http://antivirus.baidu.com/r/image/2014-08-25/22a52239c422616442d2c35540ff1361.jpg",
    css: {
      background: "303030",
      accent: "d32f2f",
      accent_dark: "FDD835"
    }
  },
  {
    trackId: "UBER-TAXI",
    title: "chamar taxi e Uber ao mesmo tempo!",
    img: "http://sorrisosdesucesso.com/wp-content/uploads/2015/12/Uber-v-Taxi.jpg",
    css: {
      background: "303030",
      accent: "F9A825",
      accent_dark: "F57F17"
    }
  },
  {
    trackId: "WHILE-TRUE",
    title: "fazer WHILE true no código",
    img: "http://customize.org/thumbnails/larger/96648.jpg",
    css: {
      background: "303030",
      accent: "00E676"
    }
  },
  {
    trackId: "ABRIR-IE",
    title: "abrir o IE",
    img: "http://blog.speedexam.net/wp-content/uploads/2015/05/ie_8_rc1.jpg",
    css: {
      background: "303030",
      accent: "0288D1"
    }
  }
];

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


app.get('/', function (req, res) {

  var random = getRandomInt(0,data.length);
  res.render('index', {
    data: data[random],
    online: getRandomInt(1, 230)
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});