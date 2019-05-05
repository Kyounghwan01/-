const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        host: '0.0.0.0',
        hot: true
    }

});
