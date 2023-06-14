$(() => {
    $(".burger__button, .menu__link").on("click", () => {
        $('.menu__list, .burger__button').toggleClass('active');
        $('.header__text').toggleClass('z-index-1');
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
        const screenWidth = $(window).width();
        const diff = $(".about").offset().top - $(".header__top").offset().top;

        $(".menu").css('background-color', diff < 85 && screenWidth > 992 ? '#7792E0' : 'unset');

        if (diff < 85) {
            $(".menu .logo, .burger__button span, .burger__button::before, .burger__button::after")
                .css('background-color', '#7792E0');
        } else {
            $(".menu .logo").css('background-color', 'unset');
            $(".burger__button span, .burger__button::before, .burger__button::after")
                .css('background-color', '#fff');
        }
    });
});

mixitup('.portfolio__content');