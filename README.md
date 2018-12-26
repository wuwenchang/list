# 数组方法

一般数组方法有这么一些，大家不熟的可以自己多动动手指敲一敲

1. **[join()](#1-join())**
2. **[push()和pop()](#2-push()和pop())**
3. **[shift()和unshift()](#3-shift()和unshift())**
4. **[reverse()](#4-reverse())**
5. **[concat()](#5-concat())**
6. **[slice()](#6-slice())**
7. **[splice()](#7-splice())**
8. **[indexOf()和 lastIndexOf() （ES5新增）](#8-indexOf()和 lastIndexOf() （ES5新增）)**
9. **[forEach() （ES5新增）](#9-forEach() （ES5新增）)**
10. **[map() （ES5新增）](#10-map() （ES5新增）)**
11. **[some() （ES5新增）](#11-some() （ES5新增）)**
12. **[every() （ES5新增）](#12-every() （ES5新增）)**
13. **[reduce()和 reduceRight() （ES5新增）](#13-reduce()和 reduceRight() （ES5新增）)**
14. **[filter() （ES5新增）](#14-filter() （ES5新增）)**
15. **[sort()](#15-sort())**

## 1. join()

* 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。
```
 var arr = [1,2,3];
 console.log(arr.join()); // 1,2,3
 console.log(arr.join("-")); // 1-2-3
 console.log(arr); // [1, 2, 3]（原数组不变）
 ```
* 通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：
```
function repeatString(str, n) {
   return new Array(n + 1).join(str);
}
console.log(repeatString("abc", 3)); // abcabcabc
console.log(repeatString("Hi", 5)); // HiHiHiHiHi
```
 
## 2. push()和pop（）
* push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 
* pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
```
var arr = ["Lily","lucy","Tom"];
var count = arr.push("Jack","Sean");
console.log(count); // 5
console.log(arr); // ["Lily", "lucy", "Tom", "Jack", "Sean"]
var item = arr.pop();
console.log(item); // Sean
console.log(arr); // ["Lily", "lucy", "Tom", "Jack"]
```
## 3. shift()和unshift()
* shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 
* unshift:将参数添加到原数组开头，并返回数组的长度 。

* 这组方法和上面的push()和pop()方法正好对应，一个是操作数组的开头，一个是操作数组的结尾。
```
var arr = ["Lily","lucy","Tom"];
var count = arr.unshift("Jack","Sean");
console.log(count); // 5
console.log(arr); //["Jack", "Sean", "Lily", "lucy", "Tom"]
var item = arr.shift();
console.log(item); // Jack
console.log(arr); // ["Sean", "Lily", "lucy", "Tom"]
```
## 4. reverse()
* reverse()：反转数组项的顺序。
```
var arr = [13, 24, 51, 3];
console.log(arr.reverse()); //[3, 51, 24, 13]
console.log(arr); //[3, 51, 24, 13](原数组改变)
```
## 5. concat()
* concat() ：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
```
var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
console.log(arr); // [1, 3, 5, 7](原数组未被修改)
```
* 从上面测试结果可以发现：传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中。但是如果传入的是一个二维数组呢？
```
var arrCopy2 = arr.concat([9,[11,13]]);
console.log(arrCopy2); //[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]); //[11, 13]
```


