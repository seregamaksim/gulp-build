'use strict';

const path = require('path');
const config = require('./config.json');

module.exports = {
  mode: 'none',
  entry: {
    // vendor: [
      // './src/script/jquery-3.4.1.min.js'
    // ],
    app: './src/script/app.js'
  },
  output: {
    path: path.resolve(config.root.build, config.js.dist),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            {
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          ]
        }
      },
      {
        test: /jquery.+\.js$/,
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
};

// 

