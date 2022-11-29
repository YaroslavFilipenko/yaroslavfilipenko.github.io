//skill progress bar

$('.skill').click(function () {
    $(this).toggleClass('skill_active');
    $('.skill').not(this).removeClass('skill_active');

    let progressBar = $(this).children('.skill_type').children('.meter').children('span');
    let unsetProgress = $('.skill').not(this).children('.skill_type').children('.meter').children('span');
    let barWidth = progressBar.attr('data-progress');
    let skillRate = $(this).children('.skill_type').children('.skill_info').children('.skill_rate').children('.skill_rate_number');

    function unsetProgres() {
        unsetProgress.css('width', 0)
    }

    if($('.skill').hasClass('skill_active')) {
        progressBar.css('width', barWidth + '%');

//counter

        skillRate.each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    } else {
        progressBar.css('width', 0)
    }

    unsetProgres();
});

$(window).click(function() {
    if($('.skill').hasClass('skill_active')) {
        $('.skill').removeClass('skill_active');
    };
});
    
$('.skill').click(function(event){
    event.stopPropagation();
});