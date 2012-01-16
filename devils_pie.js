// The data entry box
var $inputbox = $('input#inputfield');

// Make an event for spacebar being raised - our site uses this to determine when to move onto the next word
var SPACE_KEYCODE = 32;
var space_down = $.Event( 'keyup', { which: SPACE_KEYCODE } );

// Get the text of all the upcoming words
var words = [];
$('div#words > div#row1').children().each(function(index, element) { 
	words.push( $(element).text() );
});

// Iterate through the upcoming words, enter them into the box, and send the spacebar up event
// This will complete the typing test at 1 word per 100ms.
var count = 0;
var interval = setInterval( function() { 
		$inputbox.val(words[count]+' ');
		$inputbox.trigger(space_down)
		count++; 
		if ( count >= words.length) clearInterval(interval);
    }, 100);
