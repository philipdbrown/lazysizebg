/*
 * Lazy Size BG plugin for jQuery
 * Copyright (c) 2016 -	Philip Brown
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {

    $.fn.lazysizebg = function (options) {
        var that = this
            , opts = $.extend({}, $.fn.lazysizebg.defaults, options);

        $(document).ready(function () {
            $.fn.lazysizebg.setBg(that, $(this), opts);
        });

        return this;
    };

    $.fn.lazysizebg.setBg = function (that, window, opts) {
        var type = 'sm';
        if (window.width() >= opts.mdMin && window.width() < opts.lgMin) {
            type = 'md';
        } else if (window.width() >= opts.lgMin) {
            type = 'lg';
        }

        that.each(function () {
            var item = $(this)
                , imgUrl = (typeof item.data('lzbg-' + type) !== 'undefined') ? item.data('lzbg-' + type) : item.data('lzbg');
            if (typeof imgUrl !== 'undefined' && imgUrl) {
            	item.css("background-image", "url('" + imgUrl + "')");
            }
        });
    };

    $.fn.lazysizebg.defaults = {
        mdMin: 768
        , lgMin: 992
    };

}(jQuery));