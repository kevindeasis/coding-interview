var gulp = require('gulp');
var webpack = require('webpack')
var path = require('path');
var htmlmin = require('gulp-htmlmin')
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

gulp.task('uglify', function () {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/html'))
});

gulp.task('webpack', function () {

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(3000, 'localhost', function (err, result) {
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
//gulp.task('serve:web', serve({
//    root: ['./dist/html/','.'],
//    port: 8000
//}));

//// Watch, not live-reload
//gulp.task('watch', function () {
//    gulp.watch('./src/**/*', ['webpack'])
//})
//gulp.task('default', ['uglify', 'webpack', 'serve:web',watch]);

gulp.task('default', ['uglify', 'webpack']);