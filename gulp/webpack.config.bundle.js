'use strict';

const path = require('path');
const config = require('./config.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'none',
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
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  },
  externals: {
    jquery: 'jQuery'
  }
};

// 

