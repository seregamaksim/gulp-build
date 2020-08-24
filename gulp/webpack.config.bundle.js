'use strict';

const path = require('path');
const config = require('./config.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    app: './src/script/app.js',
    'app.min': './src/script/app.js'
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }
};

