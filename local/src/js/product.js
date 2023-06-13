//@prepros-prepend topmenu.js

$(function() { 
    window.setTimeout(function(){   
        slider_ul_list("topmenu1");
        slider_ul_list("topmenu2");
    },600);  

    //prodcut   
    if($('.prod-detail').length > 0){
        $('.slider-nav').on('init', function(event, slick, direction){
            if(slick.slideCount < 5){
                $('.slick-btn ').remove();
            }
        });
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows:false,
            asNavFor: '.slider-nav',
            draggable:false,
            dots: false,
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows:false,
            infinite: true,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            draggable:false,
            dots: false
        });   
        $('.slick-btn .ltbn').click(function(){
            $('.slider-nav').slick("slickPrev");
        });
        $('.slick-btn .rtbn').click(function(){
            $('.slider-nav').slick("slickNext");
        });
    }
    if ($('#scrtop').length > 0) {
        var offset = $("#scrtop").offset().top;
        $("html,body").animate({
          scrollTop: offset
        });
        // alert(offset);
    }
});

