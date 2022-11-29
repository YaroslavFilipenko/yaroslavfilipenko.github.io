$('.burger_button').click(function () {
    $('.burger_menu').toggleClass('burger_menu_active');
    $('.burger_button').toggleClass('burger_button_active');
    $('.overflow').toggleClass('overflow_active');
})
$('.overflow').click(function () {
    $('.burger_menu').toggleClass('burger_menu_active');
    $('.burger_button').toggleClass('burger_button_active');
    $('.overflow').toggleClass('overflow_active');
})