/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMmerge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = webpackMmerge(common, {
    mode: 'development', // "production" | "development" | "none"
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    context: __dirname,
    target: 'web',
    stats: 'errors-only', // lets you precisely control what bundle information gets displayed
    devServer: {
        proxy: {},
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
        port: 9123,
        host: '0.0.0.0'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'none'
        })
    ]
});
