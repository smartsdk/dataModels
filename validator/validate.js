#!/usr/bin/env node
"use strict";
var fs = require("fs");
var conf = require("./libs/conf.js");
var msg = require("./libs/message.js");
var schema = require("./libs/schema.js");
var checks = require("./libs/checks.js");

const path = require('path');

/* load conf from command line and/or config.js */
conf.load();
/* load default values if not provided: as bug fix to nconf bug */
conf.defaults();
/* print help if -h option */
conf.help();
/* validate command line input */
conf.validate();

// Path Scan function

var dive = function (basePath,schemas) {
  
  var relativePath = path.relative(".",basePath);
  
  var files = fs.readdirSync(basePath);
  
  var localCommonSchemas=Array.from(schemas);
  
  if (conf.nconf.get("dmv:loadModelCommonSchemas"))
  localCommonSchemas=schema.addUniqueToArray(localCommonSchemas,schema.loadLocalSchemas(basePath));
  
  files.forEach(function(fileName){
    try {
      var fullPath;
      if (basePath != ".") fullPath = basePath + path.sep + fileName;
      else fullPath = fileName;
      var stat=fs.lstatSync(fullPath);
      
      if (stat && stat.isDirectory()) {
        // Dive into the directory
        if (!conf.nconf.get('dmv:ignoreFolders').includes(path.basename(fullPath)) && !conf.nconf.get('dmv:docFolders').includes(path.basename(fullPath)) && !conf.nconf.get('dmv:externalSchemaFolders').includes(path.basename(fullPath))){
          if (conf.nconf.get('dmv:warningChecks').includes("modelNameValid") && !conf.ignoreWarnings) checks.modelNameValid(fullPath);
          if (conf.nconf.get('dmv:warningChecks').includes("docFolderExist") && !conf.ignoreWarnings) checks.docFolderExist(fullPath);
          if (conf.nconf.get('dmv:warningChecks').includes("schemaExist") && !conf.ignoreWarnings) checks.schemaExist(fullPath);
          if (conf.nconf.get('dmv:warningChecks').includes("exampleExist") && !conf.ignoreWarnings) checks.exampleExist(fullPath);
          if (conf.nconf.get('dmv:warningChecks').includes("readmeExist") && !conf.ignoreWarnings) checks.readmeExist(fullPath);
          if (conf.nconf.get('dmv:warningChecks').includes("docValidLinks") && !conf.ignoreWarnings) checks.docValidLinks(fullPath);
          if (conf.nconf.get('dmv:warningChecks').includes("docValid") && !conf.ignoreWarnings) checks.docValid(fullPath);
          if (conf.nconf.get('dmv:warningChecks').includes("idMatching") && !conf.ignoreWarnings) checks.idMatching(fullPath);
          
          //dive in again if recursion is enabled
          if (conf.nconf.get("dmv:recursiveScan")) dive(fullPath,localCommonSchemas);
          
          if (relativePath != "" && conf.nconf.get('dmv:docFolders').includes(path.basename(fullPath)) && !conf.ignoreWarnings){
            if (conf.nconf.get('dmv:warningChecks').includes("docExist")) checks.docExist(fullPath);
          }
          //schema compilation and example validation
          var validate;
          if (relativePath != "" && schema.fileExists(fullPath,"schema.json")) {
            if(!conf.nconf.get("dmv:resolveRemoteSchemas")){
              validate = schema.compileSchema(fullPath,"schema.json",localCommonSchemas);
            } else {
              console.error("**** asynch compile is not implemented, don't use yet the dmv:resolveRemoteSchemas option ****");
              throw new Error("asynch compile is not implemented, don't use yet dmv:resolveRemoteSchemas option");
            }
          }
          if (relativePath != "" && schema.fileExists(fullPath,"example*.json") && conf.nconf.get('dmv:validateExamples')) {
            schema.validateExamples(fullPath,validate);
          }
        }
      }
    } catch (err) {
      console.log(err);
      if(conf.failErrors) throw new Error(err.message);
    }
  });
};

console.log("*** Active Warnings ***:" + conf.nconf.get('dmv:warningChecks'));
dive(conf.nconf.get('dmv:path'), conf.nconf.get("dmv:importSchemas"));
console.log("*** ValidSchemas ***: "+JSON.stringify(msg.validSchemas,null, '\t'));
console.log("*** ValidExamples ***: "+JSON.stringify(msg.validExamples,null, '\t'));
console.log("*** Warnings ***: "+JSON.stringify(msg.warnings,null, '\t'));
console.log("*** Errors ***: "+JSON.stringify(msg.errors,null, '\t'));
if (Object.keys(msg.errors).length != 0) throw new Error(JSON.stringify(msg.errors,null, '\t'));
