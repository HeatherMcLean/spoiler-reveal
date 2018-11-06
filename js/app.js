// Create the 'reveal spoiler button'
const $button = $('<button>Reveal Spoiler</button>');
// Append to web page
$('.spoiler').append($button);

//Hide spoiler on page load
$('.spoiler span').hide();

//When button is pressed
$('.spoiler').on('click', 'button', function() {                 
  //Reveal spoiler
  $('.spoiler span').show();
  //Hide button
  $('.spoiler button').hide();
});




