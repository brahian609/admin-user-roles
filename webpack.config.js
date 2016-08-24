'use strict';

let poststylus = require('poststylus');

let config = {
    entry: {
        app: './app/app.js'
    },
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders:  [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.html$/, exclude: /node_modules/, loader: 'raw'},
            {test: /\.css$/, exclude: /node_modules/, loader: 'style!css'},
            {test: /\.styl$/, exclude: /node_modules/, loader: 'style!css!stylus'},
            {test: /\.png/,   loader: 'url?mimetype=image/png' },
            {test: /\.jpg/,   loader: 'file-loader' },
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader'},
            {test: /\.(ttf|eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader' }
        ]
    },
    stylus: {
        use: [
            poststylus(['autoprefixer'])
        ]
    }

};

module.exports = config;