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
    $('.mobile-header-nav-item').hover(
        function () {
           $(this).find('.mobile-header-submenu').css({'display':'block'});
        },
        function () {
            $(this).find('.mobile-header-submenu').css({'display':'none'});
        }
    );
    $('.mobile-toggle-cat').click(function () {
        $('.mobile-header-nav').fadeToggle('slow');
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
});