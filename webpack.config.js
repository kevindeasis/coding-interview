var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "js/app": ['babel-polyfill',"./src/app.js", 'webpack-dev-server/client?http://0.0.0.0:3000','webpack/hot/only-dev-server' ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        sourceMapFilename: "./bundle.map",
        publicPath: '/dist/'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loaders: ['react-hot','babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'html/index.html',
            minify: {collapseWhitespace:true}
        })
    ],
    resolve: {
        root: path.resolve('./src'),
        extenstions: ['', '.js']
    }
}