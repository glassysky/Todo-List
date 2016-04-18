/**
 * Created by cuitianhao on 16/4/18.
 */
var express = require('express');
var webpack = require('webpack');
var http = require('http');
var webpackConfig = require('./webpack.config');
var showFilesMiddleware = require('./middlewares/showFilesMiddleware');

var port = process.env.PORT || 8080;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

app.use(devMiddleware);

//static sources
app.use('/static', express.static('./static'))

// app.get('/', showFilesMiddleware);

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})