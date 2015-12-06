$(function(){
	var res=document.cookie.substring(5);
	
	if(res!="www.open.com.cn"){
		$("#mask,#searchTip,#searchTip div:eq(0)").show();
		$("#searchTip div a").click(function(){      //为每个a标签绑定click事件
			var currentStep=$(this).parent();       //获取当前点击的a标签的父元素
			currentStep.hide();
			currentStep.next().show()
		})
		//关闭按钮
		$("#searchTip div a:last,#searchTip div span").click(function(){  //为每个span标签绑定click事件
			$("#mask,#searchTip").hide();
		})
		//添加cookie
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+30);
		document.cookie="name=www.open.com.cn;expires="+oDate;
	}
})