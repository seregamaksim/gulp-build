'use strict';

const webpack = require('webpack');
const notifier = require('node-notifier');
const PluginError = require('plugin-error');
const logger = require('fancy-log');
const config = require('../webpack.config.bundle');
const log = {
  colors: true,
  reasons: true
};

  
function js(done) {
  const complete = (error, stats) => {
    const err = (error) => {
      const formatedError = new PluginError('webpack', error);
      notifier.notify({
        title: `Error: ${formatedError.plugin}`,
        message: formatedError.message
      });
      done(formatedError);
    };

    const success = (detail) => {
      logger('[webpack]', detail);
      done();
    };

    if (error) {
      err(error);
    } else if ( stats.hasErrors() ) {
      err( stats.toString(log) );
    } else {
      success( stats.toString(log) );
    }
  };
  
  webpack(config, complete);
}

exports.js = js;