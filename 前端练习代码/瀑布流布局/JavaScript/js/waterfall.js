//页面载入后执行
window.onload=function(){
	waterfall('main', 'pin');  //调用瀑布流函数
	var dataInt={
		'data':[
			{'src':'1.jpg'},
			{'src':'2.jpg'},
			{'src':'3.jpg'},
			{'src':'4.jpg'},
			{'src':'5.jpg'},
			{'src':'6.jpg'},
			{'src':'7.jpg'},
			{'src':'8.jpg'}
		]
	};
	window.onscroll=function(){   //滚动条触发
		if(checkscrollside()){    //调用check函数判断是否需要加载
			var oParent=document.getElementById('main');
			for (var i = 0; i < dataInt.data.length; i++) {
				var oPin=document.createElement('div');
				oPin.className='pin';
				oParent.appendChild(oPin);  //插入oPIn
				var oBox=document.createElement('div');
				oBox.className='box';
				oPin.appendChild(oBox);    //插入oBox
				var oImg=document.createElement('img');
				oImg.src='/images/'+dataInt.data[i].src;
				oBox.appendChild(oImg);		//插入oImg
			}
			waterfall('main',' pin');
		}
	};
};






//声明用到的函数
//获取parent下的所有class=className的元素
function getClassObj(parent,className){
	var obj=parent.getElementsByTagName('*');//获取parent下的所有标签
	var pinS=[]; //设置个保存指定标签的数组
	for (var i = 0; i < obj.length; i++) {   //遍历obj的所有标签
		if(obj[i].className==className){   //判断是否是需要的className
			pinS.push(obj[i]);  //把都要的标签都压入pinS里
		}
	}
	return pinS;
}

//获取数组arr里面minh的位置
function getminHIndex(arr,minH){
	for (var i in arr) {
		if (arr[i]==minH) {
			return i;
		}
	}
}

//瀑布流显示函数
function waterfall(parent,pin){
	var oParent=document.getElementById('main');  //获取main标签
	var oPins=getClassObj(oParent,'pin'); //获取指定classname的标签
	var iPinw=oPins[0].offsetWidth;  //获取图片显示宽度
	var num=Math.floor(document.documentElement.clientWidth/iPinw);  //计算可视区域内可以显示几列图片
	oParent.style.cssText='width:'+iPinw*num+'px;margin:0 auto';  //用cssText给oParent设置样式
	var pinHarr=[];  //设置放置每一列高度的数组
	for (var i = 0; i < oPins.length; i++) {
		var pinH=oPins[i].offsetHeight;  //获取当前元素的高度
		if(i<num){                 //只遍历一行的列数
			pinHarr[i]=pinH;
		}else{
			var minH=Math.min.apply(null, pinHarr);//获取pinHarr里面最小的一个数
			var Index=getminHIndex(pinHarr, minH); //获取最小数的索引位置
			oPins[i].style.cssText='position:absolute;top:'+minH+'px;left:'+oPins[Index].offsetLeft+'px'; //使用cssText设置样式
			pinHarr[Index]+=oPins[i].offsetHeight;  //同时增加当前最低高度元素
		}

	}

}

//检查滚动条位置，判断是否加载
function checkscrollside(){
	var oParent=document.getElementById('main'); //获取id=main
	var oPins=getClassObj(oParent,'pin');
	var lastPinH=oPins[oPins.length-1].offsetTop+Math.floor(oPins[oPins.length-1].offsetHeight/2); //获取当前div的top+自身高度的一半
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;  //获取滚动条滚动距离
	var documentH=document.documentElement.clientHeight||document.body.clientHeight;
	return(lastPinH<scrollTop+documentH)?true:false;//可以增大小于号右边的数值，控制加载的数目
}