//Hide spoiler on page load
$('.spoiler span').hide();

//When button is pressed
$('.spoiler button').click(function() {                 
  //Reveal spoiler
  $('.spoiler span').show();
  //Hide button
  $('.spoiler button').hide();
});




