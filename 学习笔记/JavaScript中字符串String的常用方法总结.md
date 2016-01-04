###1. charAt() 返回指定位置(索引index)的字符，charCodeAt()返回指定位置字符的unicode编码。

```
var str = "hello";
str.charAt(4);  //"o"
str.charCodeAt(4);//111
```
###2. indexOf() 和lastIndexOf()返回指定的字符在字符串首次和末次出现的位置。
大小写敏感

```
var str = "hello";
str.indexOf("ll");  //2
str.lastIndexOf("ll");//2
```
###3. match()在字符串中检索指定的值，可以为正则

```
str = "2hah 5hello";
str.match('hello'); //["hello"]
str.match(/\d/g); //["2", "5"]
```
###4.slice(start,end),提取指定位置的新字符串

```
str = "hello";
str.slice(3,4); //"l"
str.slice(1);//"ello"
```
###5. split(),把一个字符串分割成数组

```
str="hello-world-hi-wo";
str.split("-"); //["hello", "world", "hi", "wo"]
```
###6. substr(start,length)返回指定位置指定长度的字符串

```
str = "hello world hi";
str.substr(3,5); //"lo wo"
```
###7. substring()和slice()类似，不过参数不分先后。[`查看区别`](http://www.cnblogs.com/littledu/archive/2011/04/18/2019475.html)
<hr>

###8. toLowerCase()和toUpperCase()，分别是转换为小写和大写字母。



