#!/usr/bin/env node

/**
 * Module dependencies.
 */

var fs = require('fs')
var mkdirp = require('mkdirp')
var config = require('./config.json')
var dir = require('./src/dir')()
    
mkdirp(dir, function (err) {
  if (err) console.error(err)
  else console.log('pow!')
    
  for (var key in config) {
    var title = config[key]

    var _file_name = dir + '/' + key + '.md'
    fs.writeFileSync(_file_name, '# ' + title)
  }
})


