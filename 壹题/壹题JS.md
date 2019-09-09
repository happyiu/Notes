# JS

## **`['1','2','3'].map(parseInt) what&why`**

### `我的回答`
这个应该是生成一个新数组[1,2,3]吧？？？因为.map方法是映射数组，然后计算返回一个新数组，.map(callback) parsetInt就是callback方法，然后将数组元素逐个转化，放入新数组

### `答案理解`
0. [1,NaN,NaN]

1. 额，首先 .map(callback) 中的`callback会自动传入三个参数`分别是 数组元素，元素索引，数组本身。(回答错的原因是不知道 callback会自动传入参数)

2. parseInt()   本身接受2个参数，第一个参数：字符串，第二个参数radix:指定基数的整数（2-36，默认为10），如果第二个参数没有指定或者为0都表示为10，如果不在2-36或0，则就转化错误，返回NaN

3. 所以使用.map(callback) 方法调用parseInt() 然后parseInt需要接受2个参数，而.map(callback)会为callback自动传入3个参数，所以parseInt接受的2个参数分别为：数组元素，元素索引

4. 综上所述，计算结果就是
    - parseInt('1',0)  // 1
    - parseInt('2',1)  // NaN   
    - parseInt('3',2)  // NaN   这里NaN的原因是二进制下没有3

5. 这题考察的知识点
    - .map()
    - parseInt()
    - 进制转化

[参考文章](https://muyiy.vip/question/js/2.html)

## **`什么是防抖和节流？有什么区别？如何实现？`**

### `我的回答`
防抖节流的话....我不清楚额，防抖的话我猜和dom树有关吧，js操作dom的时候可能会出现抖动？节流的话我猜是减少js对dom的操作？

### `答案理解`
阿西吧，全错了....

1. 防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
2. 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
3. 还不懂

[参考文章](https://muyiy.vip/question/js/3.html)

## **`下面的代码打印什么内容，为什么？`**
```js
var b = 10
(function b(){
    b = 20 
    console.log(b)
})()
```

### `我的回答`
额，这一题的话，打印的结果是 10 ？

### `答案理解`
打印 Function b 的函数体

严格模式下会看到错误：Uncaught TypeError: Assignment to constant variable

- 首先理解： IIFE（立即调用函数表达式）
    - IIFE主要包括两部分：第一部分是包围在 圆括号运算符 () 里的一个匿名函数，这个匿名函数具有独立的词法作用域
    - 第二部分再一次使用 () 创建了一个立即执行函数表达式，javascript将直接执行函数
    - IIFE函数无法进行赋值，所以 相当于 const 常量
    - 非匿名自执行函数的函数名只读
- 分析代码
    ```js
    (function b(){
        // 首先 会在内部作用域查找b的变量，此时会找到 function b，但由于function b 是IIEF，无法赋值，所以赋值失败
        b = 20
        // 此时 变量 b仍是 一个 函数
        console.log(b)  // 打印的是 函数 function b 的函数体

    })() 
    ``` 
