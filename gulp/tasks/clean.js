'use strict';

const path = require('path');
const normalize = require('normalize-path');
const del = require('del');
const config = require('../config.json');

function clean() {
  return del(normalize(path.join(config.root.build)));
}

exports.clean = clean;

