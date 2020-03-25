// Tooltip
$('[data-toggle="tooltip"]').tooltip();

// Fullscreen menu
$('#toggleNav').click(function() {
 event.preventDefault();
 $(this).toggleClass('active');
 $('#navbarMobile').toggleClass('open');
});

// Esc overlay
var KEYCODE_ESC = 27;

$(document).keyup(function(e) {
  if (e.keyCode == KEYCODE_ESC) {
    $( "#navbarMobile" ).removeClass('open');
    $( "#toggleNav" ).removeClass('active');
  }
});
