$(() => {
    $('.burger__button').on('click', () => {
        $('.menu__list, .burger__button').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

mixitup('.portfolio__content');