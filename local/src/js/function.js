
function gotopfun(scrollTop) {
    var top = $('#topBtn');
    var headerbox = $('header');
    var navbox = headerbox.outerHeight(true);
    if (scrollTop >= 60) {
        top.addClass('open');
        headerbox.addClass("navdown");
    } else {
        top.removeClass('open');
        headerbox.removeClass("navdown");
    }
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - $('footer').outerHeight(true)) {
        top.addClass('change');
        $('footer').addClass('asj fade animated');
    } else {
        top.removeClass('change');
    }
}
function resizeBgcover(winW) {
    $('.bgcover[data-lg]').each(function () {
        if (winW > 768) {
            var dataImg = $(this).data('lg');
            $(this).css('background-image', 'url(' + dataImg + ')');
        } else {
            var dataImg = $(this).data('sm');
            $(this).css('background-image', 'url(' + dataImg + ')');
        }
    });
}
function revealOnScroll() {
    var scrolled = $(window).scrollTop(), win_height_padded;
    if (window.innerWidth > 575) {
        win_height_padded = $(window).height() * 0.75;
    } else {
        win_height_padded = $(window).height() * 0.85;
    }
    $(".asj:not(.animated)").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
            $this.addClass('animated');
        }
    });
}
function isMobileDevice() {
    var mobileDevices = ['Android', 'webOS', 'iPhone', 'iPod', 'BlackBerry', 'Windows Phone']
    var isMobileDevice = false
    for (var i = 0; i < mobileDevices.length; i++) {
        if (navigator.userAgent.match(mobileDevices[i])) {
            isMobileDevice = true
        }
    }
    return isMobileDevice
}
//svg
function myDraw(path, url, x, y, w, h, id) {
    //create clipPath Element
    var clippath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    clippath.setAttribute("id", id);
    svgcanv.appendChild(clippath);

    //draw the path
    var cp = paper.path(path).translate(x, y).attr({ stroke: 0 });
    $(cp.node).appendTo('#' + id + '');

    //assoc clipPath with image
    var img = paper.image(url, x, y, w, h);//.attr({fill:"#111",opacity:0.7});    
    img.node.setAttribute("clip-path", "url(#" + id + ")");
    img.node.setAttribute("class", id);
}
//svg變顏色
$('img.svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});