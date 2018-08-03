/**
 * Created by yeanzhi on 16/7/19.
 */
'use strict';
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let env = process.env.NODE_ENV || 'development';

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)(\?.*)?$/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            }
        }),
        new webpack.ProvidePlugin({})
    ],
    externals: {
        jquery: 'jQuery',
        lodash: {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_',
            var: '_'
        }
    }
};
