console.log('Completing the test');
var $inputbox = $('input#inputfield');
var SPACE_KEYCODE = 32;
var space_down = $.Event( 'keyup', { which: SPACE_KEYCODE } );
var words = [];
$('div#words > div#row1').children().each(function(index, element) { 
	words.push( $(element).text() );
});
var count = 0;
var interval = setInterval( function() { 
		$inputbox.val(words[count]+' ');
		$inputbox.trigger(space_down);
		count++; 
		if ( count >= words.length) clearInterval(interval);
    }, 200);
