document.addEventListener("DOMContentLoaded", function() {
    //toggle function
    function toggleElement(parent,child){
        $(parent).click(function(){
            $(child).fadeToggle('slow');
        });
    }
    let lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
    lazyLoadInstance.update();
    //Переключение меню каталога
    $('.bottom-header-cat-container').mouseenter(function () {
        $('.bottom-header-cat-menu').fadeIn('slow');
    });
    $('.bottom-header-cat-menu').mouseleave(function () {
       $(this).fadeOut('slow');
    });
    //Переключение поиска по сайту
    toggleElement('.search-button','.search-container');
    $(document).mouseup(function (e) {
        const container = $(".search-container");
        if (container.has(e.target).length === 0){
            container.fadeOut('slow');
        }
    });
    //Переключение меню категорий в мобильной версии
    toggleElement('.mobile-toggle-cat','.mobile-header-nav');
    //Закрыть меню
    toggleElement('.mobile-btn-close-nav','.mobile-header-nav');
    $('.mobile-header-nav-back').click(function () {
        $(this).parent().fadeOut('slow');
    });
    $('.banner-sales-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mobile-main-banners').toggleClass('active');
    });
    $('.mobile-sales-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mobile-main-banners').toggleClass('active');
        $('.main-banner').toggleClass('active');
    });
    $('.bottom-header-cat-menu-item').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.bottom-header-cat-submenu').mouseleave(function () {
        $('.bottom-header-cat-menu-item.active').removeClass('active');
    });
    $('.mobile-header-submenu').after('<span class="fas fa-chevron-right open-submenu"></span>');
    $('.open-submenu').click(function () {
        $(this).prev('.mobile-header-submenu').fadeToggle('slow');
    });

    $('.catalog-filter-item').click(function () {
       $(this).toggleClass('active').siblings().removeClass('active').find('.catalog-filter-list').fadeOut('slow');
       $(this).find('.catalog-filter-list').fadeIn('slow');
       $(this).find('.catalog-filter-button').toggleClass('active');
    });
    $('.catalog-filter-item').mouseleave(function () {
        $(this).removeClass('active');
        $(this).find('.catalog-filter-list').fadeOut('slow');
        $(this).find('.catalog-filter-button').removeClass('active');
    });
    $('.catalog-filter-item.active').click(function () {
        $(this).find('.catalog-filter-list').fadeOut('slow');
    });
    $('.sort-date-item').click(function () {
       $(this).find('.sort-date-btn').toggleClass('active');
       $(this).find('.sort-date-list').fadeToggle('slow');
    });
    $('.sort-date-item').mouseleave(function () {
       $(this).removeClass('active');
       $(this).find('.sort-date-btn').removeClass('active');
        $(this).find('.sort-date-list').fadeOut('slow');
    });
    $('.main-banner-list-item').hover(
        function () {
            $(this).addClass('active').siblings().removeClass('active');
        },
        function () {
            $(this).removeClass('active');
        }
    )
    $(".mobile-main-our-categories-list").owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        nav: false,
        dots: true,
        responsive: {
            0:{
                items: 1,
                margin: 0,
                center: true,
                autoWidth: true,
                nav: false,
                dots: true
            },
            700:{
                items: 1,
                margin: 0,
                center: true,
                autoWidth: true,
                nav: false,
                dots: true
            },
            800:{
                items: 2,
                margin: 20,
                autoWidth: false,
                nav: false,
                dots: true
            },
            993: {
                items: 3,
                margin: 40,
                autoWidth: true,
                center: false,
                nav: false,
                dots: true
            }
        }
    });
   $('.catalog-tab-item-button').click(function () {
      $(this).toggleClass('active');
      $('.catalog-tab-item:not(.active)').fadeToggle('slow');
      $('.catalog-tab-submenu').fadeToggle('slow');
   });
   $('.mobile-catalog-filter-button').click(function () {
      $(this).toggleClass('active');
      $('.catalog-filter-item:not(.mobile-catalog-filter-item)').fadeToggle('slow');
      $('.catalog-filter-bottom').toggleClass('active');
   });
   $('.catalog-tab-item:not(:first-of-type)').mouseenter(function () {
      $(this).find('a').css({'color': '#222'});
   });
    $('.docs-list').owlCarousel({
        autoplayHoverPause: true,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0:{
                items: 3
            },
            800:{
                items: 3
            },
            900: {
                items: 9
            }
        }
    });
    $('.product-main-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        asNavFor: '.thumb-main-slider',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true
                }
            }
            ]
    });
    $('.thumb-main-slider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        adaptiveHeight: true,
        asNavFor: '.product-main-slider'
    });
    $('[data-fancybox="images"]').fancybox({
        buttons : [
            'slideShow',
            'zoom',
            'fullScreen',
            'close'
        ],
    });
    $('.product-main-slider .slick-dots button').text('');
});