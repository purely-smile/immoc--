//定义getByClassName函数，让函数实现根据class name获取对象并返回

function getByClassName(obj, cls) {
	var elements = obj.getElementsByTagName("*");
	var result = [];
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className == cls) {
			result.push(elements[i]);
		}
	}
	return result;
}
//判断obj标签里是否有class为cls，如果有则返回匹配到的结果

function hasClass(obj, cls) {
	return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
//移除已存在的指定class属性值

function removeClass(obj, cls) {
	if (hasClass(obj, cls)) {                               //先调用hasClass()方法判断是否有class值，如果已经没了，就直接跳出
		var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)"); //定义一个正则表达式
		obj.className = obj.className.replace(reg, "");//然后用正则表达式匹配，然后替换为空，到达替换的目的
	}
}
//增加class属性值

function addClass(obj, cls) {                            
	if (!hasClass(obj, cls)) {                             //先调用hasClass()方法判断是否为空，如为空就添加     
		obj.className += " " + cls;   //" "这里的空格最好要加上，虽然这里有没都行，如果class里面已经有数值来，再增加的话，就要格一个空格了。
	}
}
window.onload = function () {
	window.onscroll = function () {
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		var menus = document.getElementById("menu").getElementsByTagName("a");
		var items = getByClassName(document.getElementById("content"), "item")
		var currentId = "";
		for (var i = 0; i < items.length; i++) {
			var _item = items[i];
			var _itemTop = _item.offsetTop;
			if (top > _itemTop - 200) {
				currentId = _item.id;
			} else {
				break;
			}
		}
		if (currentId) {
			for (var j = 0; j < menus.length; j++) {
				var _menu = menus[j];
				var _href = _menu.href.split("#");
				if (_href[_href.length - 1] != currentId) {
					removeClass(_menu, "current");
				} else {
					addClass(_menu, "current");
				}

			}
		}
	}
}