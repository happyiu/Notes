# CSS

## **`介绍下BFC及其应用`**

### `我的回答`
额... BFC是特殊的块元素？？应用的话，用来解决高度塌陷还有一些其他问题。

好吧，我不清楚，我只知道可以用来解决高度塌陷.....

### `答案理解`

BFC(block formatting context) 就是 块格式化上下文，它是一个独立的渲染区域

应用：浮动定位，清除浮动，消除外边距折叠，自适应多栏布局

特性：让处在BFC内部的元素与外部隔离，使内部元素的定位不会互相影响，使BFC内部浮动元素不会乱跑，和浮动元素产生边界，同一个BFC中，垂直外边距会重叠，html根元素就具体BFC的特性

创建BFC的方法： 
- html 根元素
- float 浮动(float不为none)
- 绝对定位(position为absolute或fixed)
- display 值为 inline-block table-cell
- overflow 值不为visable
- flex布局/grid布局

[参考文章](https://www.jianshu.com/p/b85182267125)


## **`怎么让一个div水平垂直居中`**

### `我的回答`

1. 为父元素添加flex布局，给div设置margin：auto
2. 额，我想不出了emmmm......

### `答案理解`

1. 为父元素添加flex布局，给div设置margin：auto
2. 为父元素添加flex布局,设置ustify-content: center;align-items: center; 和我第一种一样
3. 父元素相对定位后，子元素绝对定位，然后top:50% left:50% 再用transform:translate(-50%,-50%)[tranlate是相对自身移动的]移到中点

[参考答案](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/92)


## **`比较分析 opacity:0,visbility:hidden,display:none 优劣和适用场景`**

### `我的回答`

1. opacity:0 是设置透明度为0，虽然看不见，但还是会渲染占据空间。visibility:none 设置不可见，display:none 不会占据空间。
2. 优劣的话，如果需要频繁的切换元素是否可见，可以使用visibility，如果只是需要元素隐藏，并且不常用，则使用display，减少渲染次数，opacity主要和设置颜色有关吧

### `答案理解`
- 结构
    - display:n3one 会让元素完全从渲染树中消失，渲染的时候不占据空间，无法DOM监听
    - visibility:hidden 不会让元素从dom树中消失，渲染元素继续占据空间，无法DOM监听
    - opacity:0 不会从dom树中消失，渲染元素继续占据空间，只是内容不可见，但还是可以DOM监听
- 继承
    - display,opacity 是非继承性的，子孙节点不能通过修改display,opacity重新显现
    - visibility 是继承属性，子孙元素可以设置visibility重新显现
- 性能
    - display 会使文档回流，性能消耗较大
    - visibility 会造成文档重绘，性能消耗较少
    - opacity 会造成文档重绘，性能消耗较少

[答案参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/100)


## **`已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。`**
<img src="1.jpg" style="width:480px!important;”>

### `我的回答`

1. 设置 transform: scale() 将图片缩小
2. 额....想不出来了

### `答案理解`
- 使用 max-width 
- 再 width:300px!important; 来覆盖前面的样式
- transform: scale(0.625, 1) 缩小图片
- padding:0 90px box-szie:border-box 来使图片宽度变为300px
- 借用动画优先级高于css来设置宽度

[答案参考](https://muyiy.vip/question/css/60.html)


## **`介绍下BFC,IFC,GFC和FFC`**

### `我的回答`
- 额........
- BFC (block format context) 块格式化上下文，特点是BFC内的元素与外界元素互不影响，产生BFC的主要有：html根元素，position:absulte fix ,overflew:不为visitity，float:不为none 等，BFC的作用可以用来解决浮动造成的高度塌陷等布局的问题
- IFC GFC FFC 是啥东西....

### `答案理解`
- BFC 块格式化上下文就是页面上的一个隔离的渲染区域，容器里的子元素布局不会影响到外面的元素
- IFC 内联格式化上下文，高度由其行内元素中最高的实际高度计算而来，左右紧贴IFC，作用可以用来，水平居中，方法为：设置inline-block 在外层产生IFC，然后通过text-aligin来使水平居中
- GFC 网络布局格式化上下文 
- FFC 自适应格式化上下文FFC，使用display:flex 或 inline-flex 的元素就会生成自适应容器，但只有谷歌和火狐支持，在自适应容器下，每一个元素都是一个伸缩项目伸缩项目可以任意个数，且容器外和容器内不受影响。

[答案参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/122) 

## **`[] == [],[] == ![],{} == {},{} == ! {}`**

### `我的回答`

- 因为js是动态性，弱语言的，所以在 使用 == 比较时，会发生隐式转化

1. [] == []  // false   因为数组是对象，两个数组比较的是他们的引用地址，引用地址不同就为false
2. {} = {}  // false  同上
3. [] == ![]  // true  
    - 首先 ! 运算符的优先级高于 == ，所以先 ![] 
        -  ![] 的意思就是将 [] 转化为Boolean类型，然后取非
        - [] 属于对象，所以对象转Boolean类型都为 true ,即使是空数组
        - 最后 取非操作 得到的结果为 false
    - 所以，就可以转变为： [] == false 
    - 当 两边比较时，一边为对象，另一边不为对象，则两边都会转化为数值类型再进行比较。
    - [] 转化为 数值类型的过程
        - [] 属于对象，会先调用valueOf() 方法，返回[] ， 
        - []再转化为字符串为 ''，(不是所有的数组都能)
        - '' 转化为数字为0
    - false 转化为 数字 为 0 
    - 最后 0 == 0 当然为 true
4. {} == !{}    // false
    -  首先 由于 ! 的存在，先运算 !{} ，过程结果同上 为 false
    - {} == false
        - 由于一边对象，一边boolean，所以两边都会转化为数值类型再比较
        - 但 {} 不能转数值类型，所以得到的是 NaN
        - Nan == 0 明显为 false
    - 得出结果就是 false


### `答案理解`

- 在使用 == 转化不同数据类型比较时，一般会准守以下规则
- 如果一个操作数为 布尔值 ，比较相等性前转化为数值
- 如果一个操作数为 字符串 ，另一个操作数为数值，则将字符串转化为数值
- 如果一个操作数为 对象，另一个表示，则先调用对象的valueof()方法，再同上判断
- 如果两个操作数都是 对象 ， 则比较两个对象地址是不是指向同一个 对象
- NaN 和任何比较都是 false
- null == undefind

[答案参考](https://www.cnblogs.com/wisewrong/p/10396002.html)