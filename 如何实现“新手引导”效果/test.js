window.onload = function () {                                     //页面载入后执行
	var oMask = document.getElementById("mask");                //获取id=mask的div
	var oSearch = document.getElementById("searchTip");         //获取id=searchTip的div
	var aStep = oSearch.getElementsByTagName("div");			  //获取searchTip这个div里的div标签，这里是多个，所有是个数组
	var aA = oSearch.getElementsByTagName("a");                 //获取searchTip这个div里的a标签，这里是多个，所有是个数组
	var aClose = oSearch.getElementsByTagName("span");		  //获取searchTip这个div里的span标签，这里是多个，所有是个数组
	
	var res = document.cookie.substring(5);                     	//读取cookie
	console.log(document.cookie);
	if (res = "www.open.com.cn") {                                  	//判断是否来过
		oMask.style.display = oSearch.style.display = aStep[0].style.display = "block";    //设置蒙版和第一个引导为block(css里设置了none)

		for (var i = 0; i < aStep.length; i++) {                        //遍历5个新手引导的子div
			aA[i].index = i;                                //给每个a标签（下一步按钮）添加索引
			aA[i].onclick = function () {                                   //给每个a标签绑定鼠标点击事件
				this.parentNode.style.display = "none"                   //这里面this指的是当前点击的a标签，parentNode之后，就变成a的父级，step1这个标签了。意思是，点击一次，就让step1隐藏。
				console.log(this.index);                   
				if (this.index < aStep.length - 1) {               //index返回的是元素的索引位置，从0开始，所以length要-1,才是最后一个
					aStep[this.index + 1].style.display = "block";  //当前索引的下一个设置block显示
				} else if (this.index == aStep.length - 1) {             //这里也可以用else，因为index不可能大于
					oMask.style.display = "none";                          //最后一步，点击后，就把蒙版隐藏了
					oSearch.style.display = "none";                     //同时5个step的父级隐藏了（子元素也就跟着隐藏了）
				}
			}
		}
		//关闭按钮
		
		for (var i = 0; i < aClose.length; i++) {                         //遍历关闭按钮
			aClose[i].onclick = function () {                             //绑定点击事件
				oMask.style.display = oSearch.style.display = "none";          //隐藏蒙版和step们的父级元素
			}
		}
		//同时添加cookie
		var oDate = new Date();                 //定义oDate对象，初始化为当前时间
		
		oDate.setDate(oDate.getDate() + 30);   //给odate设置了，30天后。
		document.cookie = "name=www.open.com.cn;expires=" + oDate; //加入到cookie中。
	}
}