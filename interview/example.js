// 1. 将2013，2013Q3，2013Q1,2013Q2，2014，2014Q4，2014Q3进行排序，数字在前，接着是....Q4，Q3...从小到大排序
    var arr = ['2013','2013Q3','2013Q1','2013Q2','2014','2014Q4','2014Q3'];
    // 首先我们知道不能直接用sort方法，那么我们就要自己建立一种规则进行
    arr.sort(function(num1,num2){
        num1=num1.length>4?num1.slice(0,4)*100 - num1[5] : num1.slice(0,4)*100 - 10;
        num2=num2.length>4?num2.slice(0,4)*100 - num2[5] : num2.slice(0,4)*100 - 10;
        return num1-num2
    })
    console.log(arr)
    // (7) ["2013", "2013Q1", "2013Q2", "2013Q3", "2014", "2014Q3", "2014Q4"]
    // 当然这是有规律的，如果真是杂乱无章毫无规律，就没有这种另类的排序需求，这样就可以直接用sort方法

// 2. 统计字符串'asdfzxcvasdfsdfzxcafasdfxcvasdf'中哪一个字符出现的频率最高，具体哪一个字符
    var str = 'asdfzxcvasdfsdfzxcafasdfxcvasdf'
    var arr = str.split('');
    arr.reduce(function(prev, cur, i, arr){
        prev[cur] ? prev[cur]++ : prev[cur] = 1;
        return prev
    },{});

// 自己敲一下代码看看结果，我偷一下懒，哈哈
// 当然你也可以用for循环做，这也是可以的，但是我觉得用数组方法更高级一点，还有更高级的是用正则 如下：
    var result = maxN(str);
    function maxN(str){
        var json = {};
        str.replace(/(\w{1})/g,function($1){
            json[$1] ? json[$1]+=1 : json[$1] = 1;
        });
        var number = '';
        var num = 0;
        for(var j in json){
            if (json[j]>num) {
                num = json[j];
                number = j;
            }
        }
        return {
            number:number,
            num:num
        }
    }
// 3. 查找字符串（只有0与1构成的）连续出现最长的1的起始位置以及长度
    var str = '0001111110000101010000000000000111111111111111100111111';
    var arr = [];
    var number = 0;
    for(var i=0;i<str.length;i++){
        if(str[i]==='1'){
            number++
        } else {
            number = 0
        }
        arr.push(number);
    };
// 最长的长度为Math.max(...arr)，位置就是arr.indexOf(Math.max(...arr))+1-Math.max(...arr)；
// 当然还是有bug的，连续出现最长很有可能有重复的，所以我们可以这样
var maxl=Math.max(...arr);
var index = arr.indexOf(Math.max(...arr));
console.log(index);
for(var i=index;i<arr.length;i++){
    if(arr.indexOf(Math.max(...arr),index+1)==-1){
        break;
    } else {
        // 给i赋值减少for循环的次数，优化了一下代码
        i=arr.indexOf(Math.max(...arr),index+1);
        index = i;
        console.log(i+1-Math.max(...arr));
    }
}
