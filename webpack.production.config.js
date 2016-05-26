var path = require('path');


module.exports = {
    entry: {
        "js/app": "./src/app.js"
    },
    output: {
        //filename: "./bundle.js",
        path: __dirname + "/dist",

        filename: "[name].js",

        sourceMapFilename: "./bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extenstions: ['', '.js']
    }
}