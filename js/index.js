


$(document).ready(function(){
  $('.click-popup-call-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
    $('.blur-not').toggleClass('blur-filter');
  });
});

$(document).ready(function(){
  $('.close-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
    $(".blur-not").toggleClass("blur-filter");
  });
  
});



function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}


// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 8000,
  });
});




  