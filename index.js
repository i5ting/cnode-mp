#!/usr/bin/env node

/**
 * Module dependencies.
 */

var mkdirp = require('mkdirp');

var dir = require('./src/dir')();
    
mkdirp(dir, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});

