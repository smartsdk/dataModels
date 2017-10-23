#!/usr/bin/env node
"use strict";

var fs = require("fs");
var nconf = require('nconf');
var defaults = require(".lib/defaults.js");
var msg = require(".lib/message.js");
var schema = require(".lib/schema.js");
var options = require(".lib/options.js");
var checks = require(".lib/checks.js");

const path = require('path');

/* load conf from command line and/or config.js*/
nconf = defaults.load(nconf)
/* load default values if not provided: as bug fix to nconf bug*/
nconf = defaults.defaults(nconf);

/* print help if -h option*/
if (nconf.get('h')){
  nconf.stores.argv.showHelp();
  return;
}

/* Check configuration validity */
try {
  nconf.required(['dmv:path']);
} catch (err) {
  process.exitCode = -1;
  console.error("\n Invalid Configuration:"+err.message+"\n");
  nconf.stores.argv.showHelp();
  return;
}

/* Check if path is valid */
try {
  // Query the entry
  var stats = fs.lstatSync(nconf.get('dmv:path'));
  
  // Is it a directory?
  if (!stats.isDirectory()) {
    throw new Error("The path passed must be a directory");
  }
}
catch (err) {
  process.exitCode = -1;
  console.error("\n Invalid Path: "+err.message+"\n");
  return;
}

/* add '.git','node_modules','validator' to ignore folders */
nconf.set('dmv:ignoreFolders',  nconf.get('dmv:ignoreFolders').concat(['.git','node_modules','validator']));

/* error and warnings management configuration */
options.setIgnoreWarnings(nconf.get('dmv:warnings') == 'ignore');
options.setFailWarnings(nconf.get('dmv:warnings') == 'fail');
options.setFailErrors(!nconf.get('ajv:allErrors'));
/* set ajv options */
options.setAjvOptions({
  // validation and reporting options:
  allErrors:        nconf.get('ajv:allErrors'),
  schemas:          {},
  // referenced schema options:
  missingRefs:      nconf.get('ajv:missingRefs'),
  extendRefs:       nconf.get('ajv:extendRefs'),
  loadSchema:       schema.loadSchema
});

// Path Scan function

var dive = function (basePath,schemas) {
  
  var relativePath = path.relative(".",basePath);
  
  var files = fs.readdirSync(basePath);
  
  var localCommonSchemas=Array.from(schemas);
  
  if (nconf.get("dmv:loadModelCommonSchemas"))
  localCommonSchemas=schema.addUniqueToArray(localCommonSchemas,schema.loadLocalSchemas(basePath));
  
  files.forEach(function(fileName){
    try {
      var fullPath;
      if (basePath != ".") fullPath = basePath + path.sep + fileName;
      else fullPath = fileName;
      var stat=fs.lstatSync(fullPath);
      
      if (stat && stat.isDirectory()) {
        // Dive into the directory
        if (!nconf.get('dmv:ignoreFolders').includes(path.basename(fullPath)) && !nconf.get('dmv:docFolders').includes(path.basename(fullPath)) && !nconf.get('dmv:externalSchemaFolders').includes(path.basename(fullPath))){
          if (nconf.get('dmv:warningChecks').includes("modelNameValid") && !options.getIgnoreWarnings()) checks.modelNameValid(fullPath);
          if (nconf.get('dmv:warningChecks').includes("docFolderExist") && !options.getIgnoreWarnings()) checks.docFolderExist(fullPath,nconf.get('dmv:docFolders'));
          if (nconf.get('dmv:warningChecks').includes("schemaExist") && !options.getIgnoreWarnings()) checks.schemaExist(fullPath);
          if (nconf.get('dmv:warningChecks').includes("exampleExist") && !options.getIgnoreWarnings()) checks.exampleExist(fullPath);
          if (nconf.get('dmv:warningChecks').includes("readmeExist") && !options.getIgnoreWarnings()) checks.readmeExist(fullPath);
          if (nconf.get('dmv:warningChecks').includes("docValidLinks") && !options.getIgnoreWarnings()) checks.docValidLinks(fullPath);
          if (nconf.get('dmv:warningChecks').includes("docValid") && !options.getIgnoreWarnings()) checks.docValid(fullPath);
          if (nconf.get('dmv:warningChecks').includes("idMatching") && !options.getIgnoreWarnings()) checks.idMatching(fullPath);
          
          //dive in again if recursion is enabled
          if (nconf.get("dmv:recursiveScan")) dive(fullPath,localCommonSchemas);
          
          if (relativePath != "" && nconf.get('dmv:docFolders').includes(path.basename(fullPath)) && !options.getIgnoreWarnings()){
            if (nconf.get('dmv:warningChecks').includes("docExist")) checks.docExist(fullPath);
          }
          //schema compilation and example validation
          var validate;
          if (relativePath != "" && fileExists(fullPath,"schema.json")) {
            if(!nconf.get("dmv:resolveRemoteSchemas")){
              validate = schema.compileSchema(fullPath,"schema.json",localCommonSchemas);
            } else {
              console.error("**** asynch compile is not implemented, don't use yet the dmv:resolveRemoteSchemas option ****");
              throw new Error("asynch compile is not implemented, don't use yet dmv:resolveRemoteSchemas option");
            }
          }
          if (relativePath != "" && fileExists(fullPath,"example*.json") && nconf.get('dmv:validateExamples')) {
            schema.validateExamples(fullPath,validate);
          }
        }
      }
    } catch (err) {
      console.log(err);
      if(options.getFailErrors()) throw new Error(err.message);
    }
  });
};

console.log("*** Active Warnings ***:" +nconf.get('dmv:warningChecks'));
dive(nconf.get('dmv:path'),nconf.get("dmv:importSchemas"));
console.log("*** ValidSchemas ***: "+JSON.stringify(msg.validSchemas,null, '\t'));
console.log("*** ValidExamples ***: "+JSON.stringify(msg.validExamples,null, '\t'));
console.log("*** Warnings ***: "+JSON.stringify(msg.warnings,null, '\t'));
console.log("*** Errors ***: "+JSON.stringify(msg.errors,null, '\t'));
if (Object.keys(msg.errors).length != 0) throw new Error(JSON.stringify(msg.errors,null, '\t'));
