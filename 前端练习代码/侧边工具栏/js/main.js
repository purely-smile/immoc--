requirejs(["jquery","backtop"],function ($,backtop){
    new backtop.BackTop($(".toolbar-item-top"),{
        pos:$(window).height(),
        speed:2000
    });
});