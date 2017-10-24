/* Data Model Validation checkers for structure */

var fs = require("fs");
var glob = require("glob");
var msg  = require("./message.js");
var conf = require("./conf.js");

const path = require("path");

//if a path contains folders beyond the doc and ignore ones,
// returns true, otherwise false
var containsModelFolders = function (basePath) {
  var files = fs.readdirSync(basePath);
  var folderCounter=0;
  files.forEach(function(fileName){
    try {
      var fullPath = path.join(basePath, fileName);
      var stat=fs.lstatSync(fullPath);
      if (stat && stat.isDirectory() &&
           !conf.nconf.get("dmv:ignoreFolders").includes(path.basename(fullPath)) &&
           !conf.nconf.get("dmv:docFolders").includes(path.basename(fullPath)) &&
           !conf.nconf.get("dmv:externalSchemaFolders").includes(path.basename(fullPath)))
      folderCounter++;
    } catch (err) {
      console.log("***ERROR*** "+err );
      if(options.getFailErrors()) throw new Error(err);
    }
  });
  if(folderCounter) return true;
  else return false;
};

//if a file matching a given regular expression exists in a given path
// returns true, otherwise false
var fileExists = function (basePath,regex) {
  var files = fs.readdirSync(basePath);
  var counter=0;
  var regexp = new RegExp(regex);
  files.forEach( function(item) {
    if(regexp.test(item)){
      counter++;
    }
  });
  if (counter>0) return true;
  else return false;
};

module.exports = {
  //check if a documentation file exists in a given path
  docExist: function (fullPath){
    if (!fileExists(fullPath, "spec.md") &&
         !fileExists(fullPath, "introduction.md"))
       if (msg.addWarning(fullPath, "does not include a documentation " + 
            "file named spec.md or introduction.md") && conf.failWarnings)
         throw new Error("Fail on Warnings: " + 
           JSON.stringify(msg.warnings, null, "\t"));
  },
  
  //check if a documentation folder exists in a given path
  docFolderExist: function (fullPath) {
    var counter = 0;
    conf.nconf.get("dmv:docFolders").forEach(function(value){
      try {
        fs.lstatSync(path.join(fullPath, value)).isDirectory();
        counter++;
      } catch (err) {
        
      }
    });
    if (counter == 0)
      msg.addWarning(fullPath, "does not include a documentation folder");
    if (conf.nconf.get("dmv:warningChecks").includes("docExist") && counter == 0)
      if (msg.addWarning(fullPath, "does not include a documentation " + 
           "file named spec.md or introduction.md") && conf.failWarnings)
        throw new Error("Fail on Warnings: " +
          JSON.stringify(msg.warnings, null, "\t"));    
  },
  
  //check if a folder name is valid for a data model
  modelNameValid: function (fullPath) {
    if (fullPath.charAt(0) != fullPath.charAt(0).toUpperCase())
      if (msg.addWarning(fullPath, "Model folder names should start" + 
           " in capital letter") && conf.failWarnings)
        throw new Error("Fail on Warnings: " +
          JSON.stringify(msg.warnings,null, "\t"));
  },
  
  //check if a folder includes a README.md file
  readmeExist: function(fullPath){
    if (!fileExists(fullPath,"README.md"))
      if (msg.addWarning(fullPath, "does not include a Readme file README.md") &&
           conf.failWarnings)
        throw new Error("Fail on Warnings: " +
          JSON.stringify(msg.warnings,null, "\t"));
  },
  
  //check if a folder includes a schema file
  schemaExist: function(fullPath){
    if (!containsModelFolders(fullPath) && !fileExists(fullPath,"schema.json"))
      if (msg.addWarning(fullPath, "does not include a JSON Schema file schema.json") &&
           conf.failWarnings)
        throw new Error("Fail on Warnings: " +
          JSON.stringify(msg.warnings,null, "\t"));
  },
  
  //check if a folder includes one or more example files
  exampleExist: function (fullPath){
    if (!containsModelFolders(fullPath) && !fileExists(fullPath, "example*.json"))
      if (msg.addWarning(fullPath, "does not include a JSON Example file example*.json") &&
           conf.failWarnings)
        throw new Error("Fail on Warnings: " +
          JSON.stringify(msg.warnings,null, "\t"));
  },
  
  docValid: function(fullpath){
    console.log("*** docValid: not implemented ***");
  },
  
  docValidLinks: function(fullpath){
    console.log("*** docValidLinks: not implemented ***");
  },
  
  idMatching: function(fullpath){
    console.log("*** idMatching: not implemented ***");
  },
  
  //if a file matching a given regular expression exists in a given path
  // returns true, otherwise false
  fileExists: fileExists
};
