window.onload=function(){
	waterfall();
};

function getClassobj(name){
	var oMain=document.getElementById("main");
	var obj=oMain.getElementsByTagName("*");
	var oPin=[];
	for (var i = 0; i < obj.length; i++) {
		if(obj[i].className==name){
			oPin.push(obj[i]);
		}
	}
	return oPin;
}

function getminIndex(arr,min){
	for (var i in arr) {
		if (arr[i]=min) {
		return i;
		}
	}
}

function waterfall(){
	var oMain=document.getElementById("main");
	var oPins=getClassobj('pin');
	var oW=oPins[0].offsetWidth;

	var num=Math.floor(document.documentElement.clientWidth/oW);
		console.log(oW);
	oMain.style.cssText='width:'+oW*num+'px;margin:0 auto';

}