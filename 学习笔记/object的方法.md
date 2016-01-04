1. Object.getPrototypeOf(obj)用来获取当前对象的原型对象。
    Object.getPrototypeOf({}) === Object.prototype
2. prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
    function P(){}
    P.prototype.constructor === P
3. Object.create方法类似new，创造一个新的对象，同时继承相应的属性和方法
    var o1 = {p:1};
    var o2 = Object.create(o1);
4. isPrototypeOf方法用来判断一个对象是否是另外一个对象的原型
    var o1 = {};
    var o2 = Object.create(o1);
    var o3 = Object.create(o2);
    o2.isPrototypeOf(o1) === true;
    o3.isPrototypeOf(o1) === true;
5. Object.keys()和Object.getOwnPropertyNames()都是用来遍历对象的属性的
    var a=["hello","world"];
   Object.keys()方法可枚举的属性
    Object.keys(a)  //["0", "1"]
   Object.getOwnPropertyNames()同时也返回不可枚举的属性.对象本身的所有属性
    Object.getOwnPropertyNames(a)   //["0", "1", "length"]
6. Object.observe()方法用于观察对象属性的变化,只有chrome浏览器支持
    var o={};
    Object.observe(o,function(changes){
        changes.forEach(function(change){
            console.log(change.type,change.name,change,oldValue);
        });
    });
    o.foo = 1; // add, 'foo', undefined
7. Object.getOwnPropertyDescriptor(object, propertyname) 获取某个属性的 attribute对象
    var o = {foo:3};
    Object.getOwnPropertyDescriptor(o,'foo')
    Object {value: 3, writable: true, enumerable: true, configurable: true}
8. Object.defineProperty(object, propertyname, descriptor)将属性添加到对象，或修改现有属性的特性。默认的writeable都未false
    var a = {};
    Object.defineProperty(a,'foo',{
        value:1,
        writable:true,
        enumerable:true,
        configurable:true
    });
9. object.defineProperties(object, descriptors)将一个或多个属性添加到对象，并/或修改现有属性的特性。同上
    var a={};
    Object.defineProperties(a,{
        foo:{value:1},
        bar:{value:'abc'}
    });
10. Object.preventExtensions()控制对象扩展新属性
    Object.isExtensiable()
   Object.seal()禁止对象配置。configurable:false
    Object.isSealed()
   Object.freeze()冻结一个对象。configurable:false,wirtable:false
    Object.isFrozen()
11. obj.valueOf()返回当前对象对应的值
     obj.toString()返回对应的字符串
     obj.toLocalString()返回本地字符串。(时区)
    var a = new Date();
    a.toString()
    "Thu Dec 31 2015 16:11:50 GMT+0800 (中国标准时间)"
    a.toLocaleString()
    "2015/12/31 下午4:11:50"
     obj.hasOwnProperty()判断属性是不是对象本身的
     obj.propertyEnumerable()判断是否可枚举
12. __proto__ 属性可以改写某个对象的原型
    var obj={}; var p={};
    obj.__proto__=p;
    Object.getPrototypeOf(obj) === p;
    ----------------
    var a = {x: 1};
    var b = {__proto__: a};
    b.x // 1


