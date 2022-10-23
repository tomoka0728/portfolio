var window_size     = $(window).width(),
    header_point    = 100;
const menuBtn       = $('.manu-toggler'),
      menuTarget    = menuBtn.data('target'),
      menuObj       = $('#' + menuTarget),
      headerObj     = $('header'),
      animateTime   = 500,
      mobile_point  = 900;

$('a[href^="#"]').click(function() {
    var href        = $(this).attr('href'),
        target      = $(href == "#" || href == "" ? 'html' : href),
        position    = target.offset().top;

    $('body,html').animate({scrollTop:position}, animateTime, 'swing');
    return false;
});

scrollMenu($(window).scrollTop() > header_point)

$(window).on('scroll', function() {
    scrollMenu($(this).scrollTop() > header_point)
});

$('#pageTop').on('click', function () {
    scrollPosition(0);
});

function scrollPosition(position) {
    $('body,html').animate({
        scrollTop: position
    });
}

function scrollMenu(is_scroll) {
    if (is_scroll) {
        headerObj.addClass('scroll');
    } else {
        headerObj.removeClass('scroll');
    }
}

jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {  //300pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});
