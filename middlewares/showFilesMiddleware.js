/**
 * Created by cuitianhao on 16/4/18.
 */
var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

var rootPath = '/Users/cuitianhao/Github/Todo-list/';

app.get('/', function (req, res) {
    var content = fs.readdirSync(rootPath);
    res.setHeader("Content-Type", "text/html");

    res.write('<!DOCTYPE html><html><head><meta charset="utf-8"/></head><body>');
    res.write('<ul>');

    content.forEach(function (item) {
        res.write(item);
        res.write('<br />');
    });

    res.write('</ul>');
    res.end('</body></html>');
});

module.exports = app;