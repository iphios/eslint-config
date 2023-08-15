'use strict';

const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');

const data = yaml.load(fs.readFileSync(path.join(__dirname, './eslintrc.yml'), 'utf8'));

module.exports = data;
