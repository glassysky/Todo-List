/**
 * Created by cuitianhao on 16/4/18.
 */
var express = require('express');
var webpack = require('webpack');
var http = require('http');
var config = require('./webpack.config');

var showFilesMiddleware = require('./middlewares/showFilesMiddleware');

var app = express();

var port = process.env.PORT || 8080;

app.set('port', port);

//static sources
app.use(express.static('public'));

app.get('/', showFilesMiddleware);

http.createServer(app).listen(port, function(){
    console.log('Server open on port:' + port);
});

module.exports = app;