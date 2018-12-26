## 数组方法

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

##1.join()

将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。
var arr = [1,2,3];
console.log(arr.join()); // 1,2,3
console.log(arr.join("-")); // 1-2-3
console.log(arr); // [1, 2, 3]（原数组不变）