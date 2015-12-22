$(window).on("load", function () {
	var dataInt = {
		'data': [
			{ 'src': '1.jpg' },
			{ 'src': '2.jpg' },
			{ 'src': '3.jpg' },
			{ 'src': '4.jpg' },
			{ 'src': '5.jpg' },
			{ 'src': '6.jpg' },
			{ 'src': '7.jpg' },
			{ 'src': '8.jpg' },
			{ 'src': '9.jpg' },
		]
	};
	waterfall();
	window.onscroll=function(){
		if(checkscrollside()){
			$.each(dataInt.data,function(index,value){
				var oPin=$('<div>').addClass('pin').appendTo($("#main"));
				var oBox=$('<div>').addClass('box').appendTo(oPin);
				$('<img>').attr('src','./images/'+$(value).attr('src')).appendTo(oBox);
			});
		}	waterfall();
	};

});
function waterfall() {
	var aPin = $("#main>div");
	var iPinw=aPin[0].offsetWidth;
	var num=Math.floor($(window).width()/iPinw);
	$("#main").css({
		'width':iPinw*num,
		'margin':'0 auto'
	});
	var pinHarr=[];

	aPin.each(function(index,value){
		var pinH=aPin[index].offsetHeight;

		if(index<num){
			pinHarr[index]=pinH;
		}else{
			var minH=Math.min.apply(null, pinHarr);
			var minHIndex=$.inArray(minH,pinHarr);
			$(value).css({
				'position':'absolute',
				'top':minH,
				'left':aPin.eq(minHIndex).position().left
			});
			pinHarr[minHIndex]+=aPin[index].offsetHeight;

		}
	});
}

function checkscrollside(){
	var aPin=$("#main>div");
	var lastPinH=aPin.last().get(0).offsetTop+Math.floor(aPin.last().get(0).offsetHeight/2);
	var Top=$(window).scrollTop()+$(window).height();
	return(lastPinH<Top);
}
