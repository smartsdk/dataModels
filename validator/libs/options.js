var ignoreWarnings = false;
var failWarnings = false;
var failErrors = true;
var ajvOptions = {};

module.exports = {
  setIgnoreWarnings: function(value){
    ignoreWarnings = value;
  }
  getIgnoreWarnings: function(){
    return ignoreWarnings;
  }
  setFailWarnings: function(value){
    failWarnings = value;
  }
  getFailWarnings: function(){
    return failWarnings;
  }
  setFailErrors: function(value){
    failErrors = value;
  }
  getFailWarnings: function(){
    return failErrors;
  }
  setAjvOptions: function(value){
    ajvOptions = value;
  }
  getAjvOptions: function(){
    return ajvOptions;
  }
}