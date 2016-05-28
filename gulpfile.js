var gulp = require('gulp');
var serve = require('gulp-serve');
var WebpackDevServer = require('webpack-dev-server');
var webpackStream = require('webpack-stream');
var express = require('express');
var nodemon = require('nodemon')
var webpack = require('webpack')
var path = require('path')
var config = require('./webpack.config');

//dependencies of commented code below
//var webpack = require('webpack')
//var path = require('path');
//var htmlmin = require('gulp-htmlmin')

//for setting up environments in the future
//var environment = require('./environment.js');

//Will use webpack uglify components instead
//gulp.task('uglify', function () {
//    return gulp.src('./src/html/*.html')
//        .pipe(htmlmin({collapseWhitespace: true}))
//        .pipe(gulp.dest('./dist/html'))
//});

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
        // old config for proxy
        //proxy: {
        //    "/dist/*": "http://localhost:8000/"
        //}
    })

    devServer.use('/static/', express.static(path.join(__dirname, './dist/')));

    devServer.listen(3000, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }

        console.log('Listening at http://localhost:3000/');
    });
});

//OLD CONFIG. If you look at serve:web the root allows you to serve different HTML
//
//var webpack = require('webpack-stream');
//var serve = require('gulp-serve');
//
//gulp.task('webpack', function() {
//    return gulp.src('./src/app.js')
//        .pipe(webpack(require('./webpack.config.js')))
//        .pipe(gulp.dest('./dist'));
//});
//

//old static server
//gulp.task('serve:web', function () {
//
//        var isRunning = false;
//        return nodemon({
//            script: './lib/devServer.js'
//        }).on('start', function () {
//            if (!isRunning) {
//                started = true;
//            }
//        });
//    }
//);


//// Watch, not live-reload
//gulp.task('watch', function () {
//    gulp.watch('./src/**/*', ['webpack'])
//})
//gulp.task('default', ['uglify', 'webpack', 'serve:web',watch]);

gulp.task('default', ['webpackStream', 'webpack']);