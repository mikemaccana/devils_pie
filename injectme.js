console.log('Completing the test');
var $inputbox = $('input#inputfield');
var SPACE_KEYCODE = 32;
var space_down = $.Event( 'keyup', { which: SPACE_KEYCODE } );

// There's a hidden div with our words. Let's get 'em.
var words = [];
$('div#words > div#row1').children().each(function(index, element) { 
  words.push( $(element).text() );
});

// Simulate the required user input
var count = 0;
var interval = setInterval( function() { 
  $inputbox.val(words[count]+' ');
  $inputbox.trigger(space_down);
  count++; 
  if ( count >= words.length) {
    clearInterval(interval)
  };
}, 150);
