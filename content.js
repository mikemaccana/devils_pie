// In order to send keyboard events, we'll need to send them from the page's JS
var load_into_page_context = function(file) {
	var file_url = chrome.extension.getURL(file);
	$.get(file_url, function(script_contents) {
		window.location = 'javascript:'+script_contents
	})
	
}

// It takes around 2 secs for the pages own JS to load the words.
setTimeout( function() {
	load_into_page_context("injectme.js");
}, 2000)	