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

function hasClass(obj, cls) {
	return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function removeClass(obj, cls) {
	if (hasClass(obj, cls)) {
		var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		obj.className = obj.className.replace(reg, "");
	}
}

function addClass(obj, cls) {
	if (!hasClass(obj, cls)) {
		obj.className += " " + cls;
	}
}
window.onload = function () {
	window.onscroll = function () {
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		var menus = document.getElementById("menu").getElementsByTagName("a");
		var items = getByClassName(document.getElementById("content"), "item")
		var currentID = "";
		for (var i = 0; i < items.length; i++) {
			var _item = items[i];
			var _itemTop = _item.offsetTop;
			if (top > _itemTop - 200) {
				currentID = _item.id;
			} else {
				break;
			}
		}
		if (currentID) {
			for (var j = 0; j < menus.length; j++) {
				var _menu = menus[j];
				var _href = _menu.href.split("#");
				console.log(_href);
				if (_href[_href.length - 1] != currentID) {
					removeClass(_menu, "current");
				} else {
					addClass(_menu, "current");
				}

			}
		}
	}
}