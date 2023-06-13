window.setTimeout(function () {
    slider_ul_list("topmenu1");
    slider_ul_list("topmenu2");
}, 600);


var vd_spbtn = $('.exhi-wrap .ltbn');
var vd_snbtn = $('.exhi-wrap .rtbn');
let dotsW = 0;

$('.exhi').on('init', function (event, slick) {
    var total = slick.slideCount;
    dotsW = 100 / (total);
    $('.dots-container .line').css('width', dotsW + "%")
});

$('.exhi').slick({
    slidesToScroll: 1,
    slidesToShow: 1.5,
    pauseOnHover: false,
    autoplay: false,
    speed: 1500,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
        }
    }]
});

vd_spbtn.click(function (event) {
    $('.exhi-wrap .exhi').slick("slickPrev");
});
vd_snbtn.click(function (event) {
    $('.exhi-wrap .exhi').slick("slickNext");
});
// On before slide change
$('.exhi').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    let lineW = (nextSlide + 1) * dotsW;
    console.log(nextSlide)
    $('.dots-container .line').css('width', lineW + "%")
});
