var path = require('path')
var webpack = require('webpack')
var HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./app/index.js'],
    output: {
        path: path.join(__dirname,'build'),
        filename: 'bundle.js'
    },
    modules: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname,'app'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    }
}