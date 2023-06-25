$(() => {
    $(".burger__button, .menu__link").on("click", () => {
        $('.menu__list, .burger__button').toggleClass('active');
        $('.header__text, .footer .logo').toggleClass('z-index-1');
        $('body').toggleClass('lock');
    });

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIE = /Trident|MSIE/.test(window.navigator.userAgent);

    if (isSafari || isIE) {
        $(".menu a, .header__text").on("click", function (e) {
            e.preventDefault();
            const id = $(this).attr('href');
            const top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }

    $(window).on('scroll resize', () => {
        const diff = $(".about").offset().top - $(".header__top").offset().top;
        const menu = $(".menu");
        menu.css('background-color', diff < 85 ? '#7792E0' : 'unset');
        menu.css('opacity', diff < 85 ? 0.2 : '');
        menu.hover(
            function () {
                if (diff < 85) {
                    $(this).css('opacity', '');
                }
            },
            function () {
                $(this).css('opacity', 0.3);
            });
    });
});

mixitup('.portfolio__content');