$(function(){                            //页面载入触发
	$(window).scroll(function(){         //滚动页面触发
		var menus=$("#menu");                //保存id为menu的标签，这里为导航div
		var top=$(document).scrollTop();     //保存滚动条top值
		var items=$(".item");               //保存class为item的元素数组
		var currentId="";                  //定义临时变量
		items.each(function(){               //遍历数组
			var that=$(this);
			if(top>that.offset().top-100){    //找到对应的div
				currentId="#"+that.attr("id");    //获取到的id为item1，前面加#，方便后面使用
			}else{
				return false;            //反之，跳出循环
			}
		})
		var currentLink=menus.find(".current");   //find class值为current的a标签
			if(currentId!=currentLink.attr("href")&&currentId){     //如果currentId存在，同时不是当前激活的div，就给增加current属性，同时移除之前的属性。
				currentLink.removeClass("current");
				menus.find("[href="+currentId+"]").addClass("current");
			}			
		
	})
})