   学习JavaScript的记录，刚好昨天终于知道call和apply的具体使用，不在混淆了，今天复习总结下Array的属性，所以配合call和apply试了下，还不错。
###1. concat()连接一个或者多个数组

```
    var a = [1,2,3];
    var b = [8,7,6];
    var c = [9,9];
    a.concat(b,c)      //[1, 2, 3, 8, 7, 6, 9, 9]
    a.concat(4,5);     //[1,2,3,4,5]
    Array.prototype.concat.apply(a,b) ===
    a.concat.apply(a,b)  //[1,2,3,8,7,6]

    Array.prototype.concat.call(a,4,5) ===
    a.concat.call(a,4,5)  //[1, 2, 3, 4, 5]
```

###2. join()把数组中的元素放入一个字符串中

```
    var a = [1,2,3];
    a.join()  //"1,2,3" ，默认逗号分割
    a.join(' ')  //"123" ，空字符串分割
    a.join('-') //"1-2-3"
    Array.prototype.join.call('hello','-') // "h-e-l-l-o"
```

###3. pop()删除数组最后一个元素，并返回。会改变原数组输入参数一样返回最后一个，等于无效果

```
    var a = [1,2,3];
    a.pop()  // 3  同时a === [1,2]
```

###4. push()向数组最后添加一个或者多个元素元素，返回新的数组长度

```
    var a = [1,2,3];
    var b = [8,9,13];
    a.push(8,8) //  a === [1, 2, 3, 8 , 8]
    a.push.apply(a,b)  //  a === [1, 2, 3, 8 , 8, 8, 9, 13]
```

###5. reverse()颠倒数组的顺序，会改变原数组

```
    var a = [1,2,3];
    a.reverse()  // a === [3,2,1]
```

###6. shift()删除数组的第一个元素,会改变原数组

```
    var a = [1,2,3];
    a.shift()   // a === [2,3]
```

###7. unshift()向数组的开头，添加一个或者多个元素

```
    var a = [1,2,3];
    var b = [4,5,6];
    a.unshift(8,8)  // a === [8, 8, 1, 2, 3]
    a.unshift.apply(a,b)  // a === [4, 5, 6, 8, 8, 1, 2, 3]
```
###8. slice()从数组中返回指定的元素,不会改变原数组

```
var a = [1,2,3,4,5,6];
a.slice(3,-2)    //[4]  
把类似数组的对象转换为真正的数组
Array.prototype.slice.call(arguments);
Array.prototype.slice.call(document.querySelectorAll("div"))；
```
###9.splice()向数组中添加或者删除元素，会改变原数组

```
var a = [1, 2, 3, 4, 5, 6];
a.splice(3,2,8)   //  a === [1, 2, 3, 8, 6]
```
3表示从a的第三个位置开始，2表示处理的元素个数，如果为0，表示不删除，8意思为删除的元素位置，同时添加元素8

###10. sort()对数组排序，会改变原数组
不传入参数默认按照字符编码顺序排，（108，5）不会按照实际数字大小排序，如果需要参数，则必须为函数
```
var a =[8,5,1,7,5,3,1,4,6,8];

function compare(a,b){
 return a-b
}

a.sort(compare); a === [1, 1, 3, 4, 5, 5, 6, 7, 8, 8]
```
###11.toString()返回数组的字符串，这个方法为Object的方法，数组继承过来的

###12.valueOf()返回数组本身，也是Object的方法

```
var a = [1,2];
a.valueOf() === a;
```
###13. isArray()判断是不是数组

```
var a = [1,2,3];
typeof a;   //  "object"
Array.isArray(a);   //true
```
<hr/>
##ECMAScript 5 加入的方法
 分别是map、forEach、filte、every、some、reduce、reduceRight、indexOf、lastindexOf，都可以在数组和类似数组（字符串）上使用。
###1. map()对数组成员依次调用一个函数。然后返回一个新数组

```
var a = [1,2,3];
a.map(function(n){
  return n+1;      //[2,3,4]
})

[1,2,3].map(function(elem,index,arr){
  return elem*elem;   // [1, 4, 9]
})
elem:当前元素，
index：当前元素的索引，
arr：当前数组本身

对字符串操作
var upper = function(x){
  return x.toUpperCase();
};
[].map.call('abc',upper); //["A", "B", "C"]

除了function这个参数，map还可以接受第二个参数，表示回调函数执行时this的指向。
var arr = ['a','b','c'];
[1,2].map(function(e){
  return this[e];  //["b", "c"]
},arr)  
```

###2. forEach()，方法类似map，只是没有返回值。

###3. filter() 依次对所有成员调用一个测试函数，返回结果为true的成员，组成一个新的数组返回。

```
[2,3,8,15,5,6].filter(function(elem){
  return elem>5;  //[8, 15, 6]
})
```

###4. some()和every()，调用一个测试函数。some是只要有一个成员返回true，结果都是true。 every是所有的成员都要true。

```
[1,2,3].some(function(elem){
  return elem>2;     
})   //true

[1,2,3].every(function(elem){
  return elem>2;
})  //false
```
###5. reduce()和reduceRight()依次处理每个数值，最后累计成一个。reduce是从左开始处理，reduceRight相反。

```
[1,1,3,5,6,7,8].reduce(function(sum,elem){
  return sum+=elem;   
}) //31
sum:累计的变量，从0开始
elem:当前的成员
```
###6. indexOf和lastIndexOf，indexOf返回给定元素在数组中出现的位置。 lastIndexOf是返回最后一次出现的位置。
 如果找不到返回-1,第二个参数表示从第几个位置开始找
```
var a = [2,2,5,6,7,8,9,4,5];
a.indexOf(5); //2
a.lastIndexOf(5); //8
```


 #参考资料：
1. [JavaScript Array对象](http://www.w3school.com.cn/jsref/jsref_obj_array.asp)
2. [JavaScript标准参考教程-标准库-Array对象](http://javascript.ruanyifeng.com/stdlib/array.html#toc2)

