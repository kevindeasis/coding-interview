var gulp = require('gulp');
var serve = require('gulp-serve');
var WebpackDevServer = require('webpack-dev-server');
var webpackStream = require('webpack-stream');
var express = require('express');
var nodemon = require('nodemon')
var webpack = require('webpack')
var path = require('path')
var config = require('./webpack.config');

gulp.task('webpackStream', function () {
    return gulp.src('./src/app.js')
        .pipe(webpackStream(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist'));
});

gulp.task('webpack', function () {

    var devServer = new WebpackDevServer(webpack(config), {
        contentBase: "./dist/html", //"./dist/html/",
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
    })

    devServer.use('/static/', express.static(path.join(__dirname, './dist/')));

    devServer.listen(3000, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }

        console.log('Listening at http://localhost:3000/');
    });
});

gulp.task('default', ['webpackStream', 'webpack']);