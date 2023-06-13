
$(function () {
    window.setTimeout(function () {
        var svg_circle = '<svg><circle cx="13.5" cy="13.5" r="12.5" /></svg>';
        $('.slick-banner').on('init', function (event, slick, direction) {
            let count = slick.slideCount;
            count = (count < 10) ? "0" + count : count;
            $('.banner .slideCount ').text(count);
            $('.slick-banner').addClass('slickinit');
        });
        $('.slick-banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            autoplay: true,
            pauseOnHover: false,
            fade: true,
            speed: 1500,
            arrows: false,
            dots: true,
            dotsClass: 'custom_paging',
            customPaging: function (slider, i) {
                return "<i></i>" + svg_circle;
            },
            appendDots: '.banner .dots',
        });
    }, 60);
    window.setTimeout(function () {
        scrollNum();
    }, 2000);
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
    let scrollNum_count = 0
    $(window).on('scroll', function () {
        if ($('.p3').hasClass('animated')) {

            if (scrollNum_count == 0) {
                scrollNum();
            }
            scrollNum_count++
        }
    }).scroll();
});

function scrollNum() {
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof (settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof (settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0, // the number the element should start at
            to: 0, // the number the element should end at
            speed: 1000, // how long it should take to count between the target numbers
            refreshInterval: 100, // how often the element should be updated
            decimals: 0, // the number of decimal places to show
            formatter: formatter, // handler for formatting the value before rendering
            onUpdate: null, // callback method for every time the element is updated
            onComplete: null // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function ($) {
        // custom formatting example
        $('.count-number').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });

        // start all the timers
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });
}
