# 数组方法

一般数组方法有这么一些，大家不熟的可以自己多动动手指敲一敲

1. **[join()](#1-join())**
2. **[push()和pop()](#2-push()和pop())**
3. **[shift() 和 unshift()](#3-shift() 和 unshift())**
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

## 1.join()

* 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。<br>
 var arr = [1,2,3];<br>
 console.log(arr.join()); // 1,2,3<br>
 console.log(arr.join("-")); // 1-2-3<br>
 console.log(arr); // [1, 2, 3]（原数组不变）<br>
* 通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：<br>
```
function repeatString(str, n) {
   return new Array(n + 1).join(str);
}
console.log(repeatString("abc", 3)); // abcabcabc
console.log(repeatString("Hi", 5)); // HiHiHiHiHi
```
 
## 2.push()和pop（）
* push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 
* pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
