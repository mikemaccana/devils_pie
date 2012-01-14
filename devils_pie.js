var $inputbox = $('input#inputfield');
var words = [];
var SPACE_KEYCODE = 32;
var space_key = jQuery.Event( 'keyup', { which: SPACE_KEYCODE } );
$('div#words > div#row1').children().each(function(index, element) { words.push($(element).text() );})

var count = 0;
var interval = setInterval( function() { 
		$inputbox.val(words[count]+' ');
		$inputbox.trigger(space_key)
		count++; 
		if( count >= words.length) clearInterval(interval);
    }, 100);
