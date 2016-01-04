define(['jquery'], function ($) {
    function ScrollTo(opts) {
        this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
        this.$el = $("html,body");
    }
    ScrollTo.prototype.move = function () {
        if ($(window).scrollTop() !== this.opts.dest) {
            if (!this.$el.is(":animated")) {
                console.log('123');
                this.$el.animate({
                    scrollTop: this.opts.dest
                }, this.opts.speed);
            }
        }
    };
    ScrollTo.prototype.go = function () {
        if ($(window).scrollTop() !== this.opts.dest) {
        this.$el.scrollTop(this.opts.dest);
        }
    };
    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800
    };

    return {
        ScrollTo: ScrollTo
    };
});