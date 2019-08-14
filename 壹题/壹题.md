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
