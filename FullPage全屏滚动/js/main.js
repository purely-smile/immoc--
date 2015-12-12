/* global move */
$('#fullpage').fullpage({
	verticalCentered:false, //内容是否垂直居中
	anchors:['page1','page2','page3','page4'], //定义锚链接
	navigation:true,//右侧圆形导航点，是否显示项目导航
	//navigationPosition:'right',//控制导航点显示的位置，默认在右侧
	navigationTooltips:['他，终于来了！',
						'真正与您贴近的个人设备',
						'非同一般的精准及时',
						'在三个特点鲜明的系列中找到属于你的风格'],//导航点tip设置
	menu:['page1','page2','page3','page4'],
	//页面载入后,link参数不可省略
	afterLoad:function(link,index){//link代表锚链接的名称，index是页面序号，从1开始
		switch(index){
			case 1:
				move('.section1 h1').scale(1.5).end();
				move('.section1 p').set('margin-top','5%').end();
				break;
			case 2:
				move('.section2 h1').scale(0.6).end();
				break;
			case 3:
				move('.section3 h1').set('margin-left','20%').end();
				move('.section3 p').set('margin-left','20%').end();
				break;
			case 4:
				move('.section4 .primary').rotate(360).end(function(){
					move('.section4 .sport').rotate(360).end(function(){
						move('.section4 .edit').rotate(360).end(function(){
							move('.section4 .column1 .icon').scale(1.4).end(function(){
								move('.section4 .column2 .icon').scale(1.4).end(function(){
									move('.section4 .column3 .icon').scale(1.4).end();
								});
							});
						});
					});
				});
				break;
				default:
				break;
		}
	},
	//页面离开后执行，link参数不可省略
	onLeave:function(link,index){//
		switch(index){
			case 1:
			move('.section1 h1').scale(1).end();
			move('.section1 p').set('margin-top','800px').end();
			break;
			case 2:
			move('.section2 h1').scale(1).end();
			break;
			case 3:
			move('.section3 h1').set('margin-left','-1500px').end();
			move('.section3 p').set('margin-left','1500px').end();
			break;
			case 4:
			move('.section4 .primary').rotate(-360).end();
			move('.section4 .sport').rotate(-360).end();
			move('.section4 .edit').rotate(-360).end();
			move('.section4 .column1 .icon').scale(1).end();
			move('.section4 .column2 .icon').scale(1).end();
			move('.section4 .column3 .icon').scale(1).end();
			break;
			default:
			break;
		}
	}
});