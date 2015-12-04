$(function () {     //当页面加载完触发回调函数
	$(window).scroll(function () {    //当滚动滚动条触发
		var items = $("#content").find(".item");  //获取每个分类,{ 0: <div#item1.item>, 1: <div#item2.item>, 2: <div#item3.item>, 3: <div#item4.item>, 4: <div#item5.item>}
		var menu = $("#menu");
		var top = $(document).scrollTop();  //获取滚动条的垂直位置
		var currentId = "";                //临时保存滚动条所在位置对应的分类item的id
		items.each(function () {           //遍历items对象，获取到具体每个分类
			var that = $(this);  
			if (top > that.offset().top - 300) {      //offset（）获取每个元素偏移值,包含left和top，所有后面加.top仅获取top指就行，-300是后期调整，更符号人性化的设置
				currentId = "#" + that.attr("id");   
			}else{
				return false;
			}
		});
		var currentLink=menu.find(".current");         //找到class为current的元素
		if(currentId&&currentLink.attr("href")!=currentId){
			currentLink.removeClass("current");
			menu.find("[href="+currentId+"]").addClass("current");  //找href属性对应的值
		}		
	})
})