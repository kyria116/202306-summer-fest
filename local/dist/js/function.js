function gotopfun(t){var a=$("#topBtn"),e=$("header");e.outerHeight(!0);t>=60?(a.addClass("open"),e.addClass("navdown")):(a.removeClass("open"),e.removeClass("navdown")),$(window).scrollTop()>=$(document).height()-$(window).height()-$("footer").outerHeight(!0)?(a.addClass("change"),$("footer").addClass("asj fade animated")):a.removeClass("change")}function resizeBgcover(t){$(".bgcover[data-lg]").each((function(){if(t>768){var a=$(this).data("lg");$(this).css("background-image","url("+a+")")}else{a=$(this).data("sm");$(this).css("background-image","url("+a+")")}}))}function revealOnScroll(){var t,a=$(window).scrollTop();t=window.innerWidth>575?.75*$(window).height():.85*$(window).height(),$(".asj:not(.animated)").each((function(){var e=$(this),r=e.offset().top;a+t>r&&e.addClass("animated")}))}function isMobileDevice(){for(var t=["Android","webOS","iPhone","iPod","BlackBerry","Windows Phone"],a=!1,e=0;e<t.length;e++)navigator.userAgent.match(t[e])&&(a=!0);return a}function myDraw(t,a,e,r,i,o,n){var s=document.createElementNS("http://www.w3.org/2000/svg","clipPath");s.setAttribute("id",n),svgcanv.appendChild(s);var d=paper.path(t).translate(e,r).attr({stroke:0});$(d.node).appendTo("#"+n);var h=paper.image(a,e,r,i,o);h.node.setAttribute("clip-path","url(#"+n+")"),h.node.setAttribute("class",n)}$("img.svg").each((function(){var t=$(this),a=t.attr("id"),e=t.attr("class"),r=t.attr("src");$.get(r,(function(r){var i=$(r).find("svg");void 0!==a&&(i=i.attr("id",a)),void 0!==e&&(i=i.attr("class",e+" replaced-svg")),!(i=i.removeAttr("xmlns:a")).attr("viewBox")&&i.attr("height")&&i.attr("width")&&i.attr("viewBox","0 0 "+i.attr("height")+" "+i.attr("width")),t.replaceWith(i)}),"xml")}));
//# sourceMappingURL=function.js.map