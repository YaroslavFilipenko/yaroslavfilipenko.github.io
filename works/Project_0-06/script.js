// up button

let btn = $('.up-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

// scroll to top after restart the page

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 500);
});

$(window).on('load', function(){
  $('html, body').animate({scrollTop:0}, 100);
});

// "scroll-behavior: smooth" effect

$(document).ready(function(){
  $(".nav-bar").on("click",".link", function (event) {
      event.preventDefault();
      let id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});

//burger button & burger menu

$('.burger-button').click(function(){
  $('.burger-button').toggleClass('burger-button-active');
  $('.burger-menu').toggleClass('burger-menu-active');
  $('html').toggleClass('blocked');
});

$('.nav-bar__item').click(function(){
  $('.burger-button').removeClass('burger-button-active');
  $('.burger-menu').removeClass('burger-menu-active');    
  $('html').removeClass('blocked');
});

$(document).mouseup(function (e) {
  let container = $('.header-top');
  if (container.has(e.target).length === 0) {
      $('.burger-button').removeClass('burger-button-active');
      $('.burger-menu').removeClass('burger-menu-active')
      $('html').removeClass('blocked');
  }
});