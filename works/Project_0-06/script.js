let btn = $('.up-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 500);
});

$(window).on('load', function(){
  $('html, body').animate({scrollTop:0}, 100);
});


$(document).ready(function(){
  $(".nav-bar").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});