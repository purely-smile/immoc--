define(["jquery"], function ($) {
    function BackTop(el, opts) {
        //使用jQuery的extend设置默认参数,如果opts有值,则替换默认值
        this.opts = $.extend({}, BackTop.DEFAULTS, opts);
        //保存传入的点击事件按钮
        this.$el = el;
        this.scroll = $("html,body");
        //判断mode,决定滚动方式,是move还是go
        if (this.opts.mode === "move") {
            this.$el.on("click", $.proxy(this._move, this));
        } else {
            this.$el.on("click", $.proxy(this._go, this));
        }
        //滚动事件
        $(window).on("scroll", $.proxy(this._check, this));
        //$ready检查下滚动条位置
        $(function () { this._check; });
    };
    //BackTop的默认值
    BackTop.DEFAULTS = {
        mode: "move",
        pos: 0,
        speed: 800
    };
    //BackTop原型上绑定内部move事件
    BackTop.prototype._move = function () {
        if ($(window).scrollTop() !== 0) {
            if (!this.scroll.is(":animated")) {
                this.scroll.animate({
                    scrollTop: 0
                }, this.opts.speed);
            }
        }
    };
    //BackTop原型上绑定内部go事件
    BackTop.prototype._go = function () {
        if ($(window).scrollTop() !== 0) {
            this.scroll.scrollTop(0);
        }
    };
    //BackTop原型上绑定内部check事件
    BackTop.prototype._check = function () {
        var $el = this.$el;
        if ($(window).scrollTop() > this.opts.pos) {
            $el.fadeIn();
        } else {
            $el.fadeOut();
        }
    };
    //输出构造函数
    return {
        BackTop: BackTop
    };
});