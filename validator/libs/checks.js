/* Data Model Validation checkers for structure */

'use strict';

var fs = require('fs');
var glob = require('glob');
var path = require('path');
var msg = require('./message.js');
var conf = require('./conf.js');
const debug = require('debug')('checks');


//if a path contains folders beyond the doc and ignore ones,
// returns true, otherwise false
var containsModelFolders = function(basePath) {
  var files = fs.readdirSync(basePath);
  var folderCounter = 0;
  files.forEach(function(fileName) {
    try {
      var fullPath = path.join(basePath, fileName);
      debug("*containsModelFolders* - fullPath: "+ fullPath);
      var stat = fs.lstatSync(fullPath);
      if (stat && stat.isDirectory() &&
           !conf.nconf.get('dmv:ignoreFolders')
             .includes(path.basename(fullPath)) &&
           !conf.nconf.get('dmv:docFolders')
             .includes(path.basename(fullPath)) &&
           !conf.nconf.get('dmv:externalSchemaFolders')
             .includes(path.basename(fullPath)))
      folderCounter++;
      debug("*containsModelFolders* - folders found: "+ folderCounter);
    } catch (err) {
      console.log('***ERROR*** ' + err);
      if (conf.failErrors) throw new Error(err);
    }
  });
  if (folderCounter) return true;
  else return false;
};

//if a file matching a given regular expression exists in a given path
// returns true, otherwise false
var fileExists = function(basePath, regex) {
  var files = fs.readdirSync(basePath);
  var counter = 0;
  debug("*fileExists* - regex: "+ regex);
  var regexp = new RegExp(regex);
  files.forEach(function(item) {
    debug("*fileExists* - checked: "+ item);
    if (regexp.test(item)) {
      debug("*fileExists* - regex: match");
      counter++;
    }
  });
  if (counter > 0) return true;
  else return false;
};

module.exports = {
  //check if a documentation file exists in a given path
  docExist: function(fullPath) {
    var check = false;
    conf.nconf.get('dmv:docFolders').forEach(function(value) {
      try {
        fs.lstatSync(path.join(fullPath, value)).isDirectory();
        if (fileExists(path.join(fullPath, value), 'spec.md') ||
            fileExists(path.join(fullPath, value), 'introduction.md'))
         check = true;
      } catch (err) {

      }
    });

    if (!check && msg.addWarning(fullPath, 'does not include a documentation ' +
          'file named spec.md or introduction.md') && conf.failWarnings)
      throw new Error('Fail on Warnings: ' +
        JSON.stringify(msg.warnings, null, '\t'));
   debug("*docExist* - " + fullPath + ": "+ check);
   return check;
  },

  //check if a documentation folder exists in a given path
  docFolderExist: function(fullPath) {
    var counter = 0;
    conf.nconf.get('dmv:docFolders').forEach(function(value) {
      try {
        fs.lstatSync(path.join(fullPath, value)).isDirectory();
        counter++;
      } catch (err) {

      }
    });
    if (counter == 0)
      msg.addWarning(fullPath, 'does not include a documentation folder');
    if (conf.nconf.get('dmv:warningChecks').includes('docExist') &&
        counter == 0)
      if (msg.addWarning(fullPath, 'does not include a documentation ' +
           'file named spec.md or introduction.md') && conf.failWarnings)
        throw new Error('Fail on Warnings: ' +
          JSON.stringify(msg.warnings, null, '\t'));
   debug("*docFolderExist* - " + fullPath + ": "+ counter);
   if (counter >0) return true;
   else return false;
  },

  //check if a folder name is valid for a data model
  modelNameValid: function(fullPath) {
    var check = true;
    if (fullPath.charAt(0) != fullPath.charAt(0).toUpperCase())
      check = false;
    if (!check &&
        msg.addWarning(fullPath, 'Model folder names should start' +
        ' in capital letter') && conf.failWarnings)
      throw new Error('Fail on Warnings: ' +
        JSON.stringify(msg.warnings, null, '\t'));
    debug("*modelNameValid* - " + fullPath + ": "+ check);
    return check;
  },

  //check if a folder includes a README.md file
  readmeExist: function(fullPath) {
    var check = true;
    if (!fileExists(fullPath, 'README.md'))
      check = false;
    if (!check &&
        msg.addWarning(fullPath, 'does not include a Readme ' +
          'file README.md') && conf.failWarnings)
      throw new Error('Fail on Warnings: ' +
        JSON.stringify(msg.warnings, null, '\t'));
    debug("*readmeExist* - " + fullPath + ": "+ check);
    return check;
  },

  //check if a folder includes a schema file
  schemaExist: function(fullPath) {
    var check = true;
    if (!fileExists(fullPath, '^schema\\.json'))
      check = false;
    if (!check && !containsModelFolders(fullPath) &&
        msg.addWarning(fullPath, 'does not include a JSON Schema ' +
          'file schema.json') && conf.failWarnings)
      throw new Error('Fail on Warnings: ' +
        JSON.stringify(msg.warnings, null, '\t'));
    debug("*schemaExist* - " + fullPath + ": "+ check);
    return check;
  },

  //check if a folder includes one or more example files
  exampleExist: function(fullPath) {
    var check = true;
    if (!fileExists(fullPath, '^example(-\\d+)?\\.json'))
      check = false;
    if (!check && !containsModelFolders(fullPath) &&
        msg.addWarning(fullPath, 'does not include a JSON Example file ' +
          'example(-\\d+)?\\.json') && conf.failWarnings)
      throw new Error('Fail on Warnings: ' +
        JSON.stringify(msg.warnings, null, '\t'));
    debug("*exampleExist* - " + fullPath + ": "+ check);
    return check;
  },

  docValid: function(fullpath) {
    console.log('*** docValid: not implemented ***');
  },

  docValidLinks: function(fullpath) {
    console.log('*** docValidLinks: not implemented ***');
  },

  idMatching: function(fullpath) {
    console.log('*** idMatching: not implemented ***');
  },

  //if a file matching a given regular expression exists in a given path
  // returns true, otherwise false
  fileExists: fileExists
};
