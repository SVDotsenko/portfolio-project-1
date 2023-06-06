$(() => {
    $('.menu__btn').on('click', () => {
        $('.header').css('background-image', (_, value) => value === 'none' ? 'url(../images/header-bg.jpg)' : 'none');
        $('.header__content-inner').toggle();
        $('.menu__list').toggleClass('menu__list--active');
    });
    const mixer = mixitup('.portfolio__content');
});