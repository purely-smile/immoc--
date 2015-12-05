$(function(){
	$(window).scroll(function(){
		var menus=$("#menu");
		var top=$(document).scrollTop();
		var items=$(".item");
		var currentId="";
		items.each(function(){
			var that=$(this);
			if(top>that.offset().top-100){
				currentId="#"+that.attr("id");
			}else{
				return false;
			}
		})
		var currentLink=menus.find(".current");   //find class值为current的a标签
				//console.log(currentLink)   
			if(currentId!=currentLink.attr("href")&&currentId){
				currentLink.removeClass("current");
				menus.find("[href="+currentId+"]").addClass("current");
			}			
		
	})
})