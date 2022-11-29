//active border animation

$('#works').click(function(){
    $('.works').toggleClass('works_active');
    $(this).toggleClass('side_bar_list_active');
    if($('.side_bar_list li').hasClass('side_bar_list_active')) {
        $('.side_bar_list li').not(this).removeClass('side_bar_list_active')
    };
    if($('.about').hasClass('about_active')||$('.skills').hasClass('skills_active')||$('.contacts').hasClass('contacts_active')||$('.cv').hasClass('cv_active')) {
        $('.about').removeClass('about_active');
        $('.skills').removeClass('skills_active');
        $('.contacts').removeClass('contacts_active');
        $('.cv').removeClass('cv_active');
    };
});

$('#about').click(function(){
    $('.about').toggleClass('about_active');
    $(this).toggleClass('side_bar_list_active');
    if($('.side_bar_list li').hasClass('side_bar_list_active')) {
        $('.side_bar_list li').not(this).removeClass('side_bar_list_active');
    };
    if($('.works').hasClass('works_active')||$('.skills').hasClass('skills_active')||$('.contacts').hasClass('contacts_active')||$('.cv').hasClass('cv_active')) {
        $('.works').removeClass('works_active');
        $('.skills').removeClass('skills_active');
        $('.contacts').removeClass('contacts_active');
        $('.cv').removeClass('cv_active');
    };
});

$('#skills').click(function(){
    $('.skills').toggleClass('skills_active');
    $(this).toggleClass('side_bar_list_active');
    if($('.side_bar_list li').hasClass('side_bar_list_active')) {
        $('.side_bar_list li').not(this).removeClass('side_bar_list_active');
    };
    if($('.works').hasClass('works_active')||$('.about').hasClass('about_active')||$('.contacts').hasClass('contacts_active')||$('.cv').hasClass('cv_active')) {
        $('.works').removeClass('works_active');
        $('.about').removeClass('about_active');
        $('.contacts').removeClass('contacts_active');
        $('.cv').removeClass('cv_active');
    };
});

$('#contacts').click(function(){
    $('.contacts').toggleClass('contacts_active');
    $(this).toggleClass('side_bar_list_active');
    if($('.side_bar_list li').hasClass('side_bar_list_active')) {
        $('.side_bar_list li').not(this).removeClass('side_bar_list_active');
    }
    if($('.works').hasClass('works_active')||$('.skills').hasClass('skills_active')||$('.about').hasClass('about_active')||$('.cv').hasClass('cv_active')) {
        $('.works').removeClass('works_active');
        $('.skills').removeClass('skills_active');
        $('.about').removeClass('about_active');
        $('.cv').removeClass('cv_active');
    };
});

$('#cv').click(function(){
    $('.cv').toggleClass('cv_active');
    $(this).toggleClass('side_bar_list_active');
    if($('.side_bar_list li').hasClass('side_bar_list_active')) {
        $('.side_bar_list li').not(this).removeClass('side_bar_list_active');
    }
    if($('.works').hasClass('works_active')||$('.skills').hasClass('skills_active')||$('.about').hasClass('about_active')||$('.contacts').hasClass('contacts_active')) {
        $('.works').removeClass('works_active');
        $('.skills').removeClass('skills_active');
        $('.about').removeClass('about_active');
        $('.contacts').removeClass('contacts_active');
    };
});

$(window).click(function() {
    if($('.side_bar_list li').hasClass('side_bar_list_active')) {
        $('.side_bar_list li').removeClass('side_bar_list_active');
    }
    if($('.works').hasClass('works_active')) {
        $('.works').removeClass('works_active');
    };
    if($('.about').hasClass('about_active')) {
        $('.about').removeClass('about_active');
    };
    if($('.skills').hasClass('skills_active')) {
        $('.skills').removeClass('skills_active'); 
    };
    if($('.contacts').hasClass('contacts_active')) {
        $('.contacts').removeClass('contacts_active'); 
    };
    if($('.cv').hasClass('cv_active')) {
        $('.cv').removeClass('cv_active');
    }
});
    
$('.side_bar_list li').click(function(event){
    event.stopPropagation();
});

$('.works').click(function(event){
    event.stopPropagation();
});

$('.about').click(function(event){
    event.stopPropagation();
});

$('.skills').click(function(event){
    event.stopPropagation();
});

$('.contacts').click(function(event){
    event.stopPropagation();
});
$('.cv').click(function(event){
    event.stopPropagation();
});