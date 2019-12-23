document.addEventListener("DOMContentLoaded", function() {
    let lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
    lazyLoadInstance.update();
    $('.toggle-cat').mouseenter(function(){
        $('.bottom-header-cat-menu').css({'display':'block'});
        });
    $('.bottom-header-cat-menu').mouseleave(function() {
        $('.bottom-header-cat-menu').css({'display': 'none'});
    });
    $('.mobile-header-submenu').after('<span class="fas fa-chevron-right open-submenu"></span>');
    $('.open-submenu').click(function () {
        $(this).prev('.mobile-header-submenu').fadeToggle('slow');
    });
    $('.mobile-toggle-cat').click(function () {
        $('.mobile-header-nav').fadeToggle('slow');
    });
    $('.mobile-header-nav-back').click(function () {
        $(this).parent().fadeOut('slow');
    });
    $('.mobile-btn-close-nav').click(function () {
      $('.mobile-header-nav').fadeOut('slow');
    });
    $('.catalog-filter-button').click(function () {
       $(this).toggleClass('active');
       $(this).parent().next('.catalog-filter-list').fadeToggle('slow');
    });
    $('.sort-date-btn').click(function () {
       $(this).toggleClass('active');
       $(this).next('.sort-date-list').fadeToggle('slow');
    });
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
   $('.catalog-tab-item').click(function (e) {
       e.preventDefault();
       if($(this).hasClass('disabled')){
           return
       }
       const activeTab = $('.catalog-tab-item.active');
       let currentTab = e.target.href,
           currentTabText = $(this).text(),
           oldTabText = activeTab.text(),
           oldTab = activeTab.attr('href');
       $(this).find('a').text(oldTabText).attr('href',oldTab);
       activeTab.find('a').text(currentTabText).attr('href',currentTab);
       currentTab = currentTab.replace(/.*\/#/g,'');
       $('#'+currentTab).addClass('active').siblings('.tab').removeClass('active');
   });
   $('.catalog-tab-item-button').click(function () {
      $(this).toggleClass('active');
      $('.catalog-tab-item:not(.active)').fadeToggle('slow');
   });
   $('.mobile-catalog-filter-button').click(function () {
      $(this).toggleClass('active');
      $('.catalog-filter-item:not(.mobile-catalog-filter-item)').fadeToggle('slow');
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
        initialSlide: 1,
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
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        variableWidth: false,
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