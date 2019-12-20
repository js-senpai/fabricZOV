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
});