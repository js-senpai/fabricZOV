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
        $('.bottom-header-cat-menu-item.active').removeClass('active');
    });
    //Переключение поиска по сайту
    toggleElement('.search-button','.search-container');
    $(document).mouseup(function (e) {
        const search_container = $(".search-container"),
              catalog_filter =  $('.catalog-filter-item'),
              sort_item = $('.sort-date-item'),
              banner_main = $('.mobile-main-banners');
        if (search_container.has(e.target).length === 0){
            search_container.fadeOut('slow');
        }
        if (catalog_filter.has(e.target).length === 0){
            $(this).removeClass('active');
            $(this).find('.catalog-filter-list').fadeOut('slow');
            $(this).find('.catalog-filter-button').removeClass('active');
        }
        if (sort_item.has(e.target).length === 0){
            $(this).removeClass('active');
            $(this).find('.sort-date-btn').removeClass('active');
            $(this).find('.sort-date-list').fadeOut('slow');
        }
        if(banner_main.has(e.target).length === 0){
            $('.mobile-main-banners').animate({
                'right': '-287px'
            },'slow','linear');
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
        if($(this).hasClass('active')){
            $('.mobile-main-banners').animate({
                'right': '0'
            },'slow','linear');
        }else{
            $('.mobile-main-banners').animate({
                'right': '-287px'
            },'slow','linear');
        }

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
       $(this).find('.catalog-filter-list').fadeToggle('slow');
       $(this).find('.catalog-filter-button').toggleClass('active');
    });

    $('.catalog-filter-item.active').click(function () {
        $(this).find('.catalog-filter-list').fadeOut('slow');
    });
    $('.sort-date-item').click(function () {
       $(this).find('.sort-date-btn').toggleClass('active');
       $(this).find('.sort-date-list').fadeToggle('slow');
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
   $('.mobile-catalog-filter-item').click(function () {
      $('.catalog-filter-item:not(.mobile-catalog-filter-item)').fadeToggle('slow');
      $('.catalog-filter-bottom').toggleClass('active');
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
                items: 5
            },
            1177:{
                items: 5
            },
            1181:{
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
        focusOnSelect: true,
        adaptiveHeight: true,
        asNavFor: '.product-main-slider',
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
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
    $('.main-our-categories-title,.metro-adress-container').hover(
        function () {
            $(this).prev('a').css({'background': '#0000007a'});
        },
        function () {
            $(this).prev('a').css({'background': 'none'});
        }
    );
    $('.metro-adress-container').hover(
        function () {
            $(this).prev('a').css({'background': '#0000007a'});
        },
        function () {
            $(this).prev('a').css({'background': 'none'});
        }
    );
    $(window).scroll(function(){
        if($(window).scrollTop()>725){
           $('.list-shop-btn').css({'position':'fixed'});
        }else if($(window).scrollTop()<725){$('.list-shop-btn').css({'position':'absolute'});
        }
    });
});