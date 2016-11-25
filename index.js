#!/usr/bin/env node

/**
 * Module dependencies.
 */

var fs = require('fs')
var mkdirp = require('mkdirp')

var dir = require('./src/dir')()
    
mkdirp(dir, function (err) {
    if (err) console.error(err)
    else console.log('pow!')
})

var fileNames = ['topic', 'reply', 'opensource', 'news', 'other']

for (var i = 0; i < fileNames.length; i++) {
  var name = fileNames[i]
  var _file_name = dir + '/' + name + '.md'
  fs.writeFileSync(_file_name, name)
}
