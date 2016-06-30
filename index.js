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


var data = [
  {
    trackId: "INSTALL-BAIDU",
    title: "instalar o BAIDU!",
    img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/baidu.jpg",
    css: {
      background: "303030",
      accent: "d32f2f",
      accent_dark: "FDD835"
    }
  },
  {
    trackId: "UBER-TAXI",
    title: "chamar taxi e Uber ao mesmo tempo!",
    img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/uber.jpg",
    css: {
      background: "303030",
      accent: "F9A825",
      accent_dark: "F57F17"
    }
  },
  {
    trackId: "WHILE-TRUE",
    title: "fazer WHILE true no código",
    img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/whiletrue.jpg",
    css: {
      background: "303030",
      accent: "00E676"
    }
  },
  {
    trackId: "ABRIR-IE",
    title: "abrir o IE",
    img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/ie8.jpg",
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

app.get('/:evilId', function (req, res) {
  res.render('index', {
    data: data[req.params.evilId],
    online: getRandomInt(1, 230)
  });
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});