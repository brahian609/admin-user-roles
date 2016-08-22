'use strict';

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
            {test: /\.html$/, exclude: /node_modules/, loader: 'raw'}
        ]
    }

};

module.exports = config;