var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        react: ['./react/entry.js', 'webpack-hot-middleware/client'],
        ng2: ['./ng2/entry.js', 'webpack-hot-middleware/client']
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
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //react
        new HtmlWebpackPlugin({
            filename: 'react.html',
            template: './react/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'ng2.html',
            template: './ng2/index.html',
            inject: false
        })
    ]
}