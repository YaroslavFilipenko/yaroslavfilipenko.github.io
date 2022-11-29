function rotateButton() {
    setTimeout(function() {
        $('.burger_button').toggleClass('burger_button_active_rotate');
    }, 650);
}

$('.burger_button').click(function () {
    $('.burger_menu').toggleClass('burger_menu_active');
    $('.burger_button').toggleClass('burger_button_active');
    $('.overflow').toggleClass('overflow_active');
    rotateButton()
})
$('.overflow').click(function () {
    $('.burger_menu').toggleClass('burger_menu_active');
    $('.burger_button').toggleClass('burger_button_active');
    $('.overflow').toggleClass('overflow_active');
})

$('.list_item').click(function(){
    if ($('.burger_menu').hasClass('burger_menu_active')||$('.burger_button').hasClass(burger_button_active)||$('.overflow').hasClass('.overflow_active'));
        $('.burger_menu').removeClass('burger_menu_active');
        $('.burger_button').removeClass('burger_button_active');
        $('.overflow').removeClass('overflow_active');
})