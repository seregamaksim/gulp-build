'use strict';

const path = require('path');
const del = require('del');

const config = require('../config.json');

module.exports = () => {
  function clean() {
    return del(path.join(config.root.build));
  }
};
