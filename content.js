// In order to send keyboard events, we'll need to send them from the page's JS

// Add a script tag pointing to a file from our extension into the page's DOM
// this script will execute in the page's own JS world
var injectJSFile = function(file) {
  var url = chrome.extension.getURL(file);
  var script = document.createElement('script');
  script.src = url;
  document.querySelector('head').appendChild(script);
}

$(function(){
  console.log('DOM ready, about to inject...')
  // It takes around 2 secs for the pages own JS to load the words.
  setTimeout( function() {
    injectJSFile("injectme.js");
  }, 2000)
})
