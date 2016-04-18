var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        react: ['./react/entry.js']
    },
    output: {
        //real path
        path: path.resolve(__dirname),
        //in memory
        publicPath: '/static/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './react/index.html',
            inject: true
        })
    ]
}