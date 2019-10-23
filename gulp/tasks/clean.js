'use strict';

const path = require('path');
const del = require('del');

const config = require('../config.json');

function clean() {
  return del(path.join(config.root.build));
}

exports.clean = clean;

