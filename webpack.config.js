var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        react: ['./react/entry.js']
    },
    output: {
        path: path.resolve(__dirname, './react/'),
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
    }
}