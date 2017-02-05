var path = require('path');
var http = require('http');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.set('ip', process.env.NODE_IP || '');
app.set('port', process.env.NODE_PORT || 3000);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));
app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'static', 'index.html'));
});

http.createServer(app).listen(app.get('port'), app.get('ip'), () =>{
  console.log(process.pid, 'Listening in port', app.get('port'));
});