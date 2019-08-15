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

