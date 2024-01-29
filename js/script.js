$(() => {
    $(".burger__button, .menu__link").on("click", () => {
        $('.menu__list, .burger__button').toggleClass('active');
        $('.header__text').toggleClass('z-index-1');
        $('body').toggleClass('lock');
    });

    $(".menu > .logo").on("click", () => {
        $('.menu__list, .burger__button').removeClass('active');
        $('.header__text').removeClass('z-index-1');
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
        $(".menu").css('background-color', diff < 85 ? '#7792E0' : 'unset');
    });
});

mixitup('.portfolio__content');