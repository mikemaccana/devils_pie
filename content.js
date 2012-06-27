// In order to send keyboard events, we'll need to send them from the page's JS

// Add some JS to the location bar
var loadJSFileToLocationBar = function(file) {
  var file_url = chrome.extension.getURL(file);
  $.get(file_url, function(script_contents) {
    window.location = 'javascript:'+script_contents
  })
}

// Add a script tag pointing to a file from our extension into the page's DOM
// this script will execute in the page's own JS world
var injectJSFile = function(file) {
  var url = chrome.extension.getURL(file);    
  $('<script type="text/javascript" src="'+url+'"/>').appendTo($('head')); 
}

$(function(){
  console.log('DOM ready, about to inject...')
  // It takes around 2 secs for the pages own JS to load the words.
  setTimeout( function() {
    //loadJSFileToLocationBar("injectme.js");
    injectJSFile("injectme.js");
  }, 2000)    
})
