# H5

## 语义化标签

|  标签名 |  作用            |
|--------|------------------|
| nav    | 表示导航          |
| header | 表示页眉          |
| footer | 表示页脚          |
| main   | 文档主要内容      |
| article| 文章              |
| aside  | 主题内容之外       |

## 表单

### 表单新增元素(不常用，因为很多浏览器不支持)
- datalist
```html
专业：<input type="text" list="subject">
<datalist id="subject">
    <option value="1" label="我是说明值1"></option>
    <option value="2" label="我是说明值2"></option>
</datalist>
```

### 表单新增属性
autofocus: 自动获焦点
autocomplete：自动获取到之前记录 on打开 off关闭
form:指定表单外的内容和指定的表单一起提交
pattern:一个正则表达式验证 input 的值
```html
    <form action="" id="form1">
        邮箱：<input type="email" name="email" autofocus autocomplete="off">
        颜色：<input type="color" name="color">
        日期：<input type="date" name="date">
        手机号：<input type="tel" name="phone" pattern="">
        选择文件:<input type="file" name="file" multiple>
        <input type="submit">
    </form>

    form域外：<input type="text" name="text" form="form1">
```

### 新增的表单事件
- oninput   当内容发生改变时，触发的事件
- oninvalid 当验证不通过时触发的事件

## 进度条
```html
<h3>进度条：</h3>
<progress max="100" value="30"></progress>

<h3>度量器</h3>
<meter max="100" min="1" high="80" low="20" value="10"></meter>
```

## 媒体
- audio (添加controls属性，才会显示出来)
- video 

## 自定义属性
1. data- 开头
2. data- 后必须有一个字符（可多个单词，— 线连接）
```html
<p data-myp="123"></p>

<script>
    window.onload = function(){
        var p = document.querySelector("p")
        // [必须使用驼峰命名法来获取值]
        var value = p.dataset["myp"]
        console.log(value)
    }

</script>
```

## 网络监听接口
- online
- offline

```js
window.addEventListener("online",function(){
    alert("网络连通了")
})
window.addEventListener("offline",function({
    alert("网络断开了")
})
```

## 全屏接口
- requestFullScreen 全屏操作
- requestFullScreen退出全屏-只能使用document来退出
- fullscreenElement 是否全屏
```js
var div = document.querySelector("div")
    // 全屏操作不同浏览器需要添加不同的前缀
    // chrome:webkit   firefox:moz   ie:me
    document.querySelector("#full").onclick = function(){
        // requestFullScreen 全屏操作
        div.webkitRequestFullScreen();
    }
    document.querySelector("#cancefull").onclick = function(){
        // requestFullScreen退出全屏-只能使用document来退出
        document.webkitCancelFullScreen();
    }
    document.querySelector("#isfull").onclick = function(){
        // fullscreenElement 是否全屏
        if(document.fullscreenElement){
            alert("true")
        }else{
            alert('false')
        }
    }
}
```

## 读取文件接口-FileReader
- readAsText() 读取文本文件(txt)，返回文本字符串（默认编码utf-8
- readAsBinaryString() 读取任意类型的文件，返回二进制字符串
- readAsDataURL() 读取文件获取一段已data开头的字符串，这串字符串的本质就是DataURL（一种将文件嵌入到文档的方案，将资源转化为base64编码的字符串，并将内容直接储存在URL中，减少请求次数，优化网站的加载速度和执行效率）

```html
<form action="">
    <label>
        选择文件:
        <input type="file" name="file" id="file" onchange="getFile()"><br/>
        <input type="submit" value="提交">
    </label>
</form>    
<img>
```
```js
function getFile(){
    // 创建文件读取对象
    var reader = new FileReader()
    // 读取文件，获取DataURL
        // 没有返回值：void，但是读完数据后会将读取文件的结果存储在文件读取对象的result中
        // 需要传递一个参数 binary large object ：文件（图片）
    // 文件存储在files属性中，是一个数组
    var file = document.querySelector("#file").files
    reader.readAsDataURL(file[0])
    // 获取数据
    // FileReader提供一个完整的事件模型，来捕获读取文件的状态
    // onabort() 读取文件中断时触发
    // onerror() 读取文件错误时触发
    // onload() 读取文件成功时触发
    // onloadend() 读取文件完成时触发（无论成功还是失败）
    // onloadstart() 读取文件开始时触发
    // onprogrss() 读取文件过程中持续触发      
    reader.onload=function(){
        //展示
        document.querySelector('img').src = reader.result
    }
}
```

## 拖曳接口
```js
// 当前被拖曳元素
        // var obj = null
        // 学习拖曳事件
        // 应用于被拖曳元素的事件
            // ondrag 整个拖曳过程
            // ondragstart 当拖曳开始时
            // ondragleave 当鼠标离开拖曳元素时
            // ondragend 当拖曳结束时调用
        document.ondragstart = function(e){
            e.target.style.opacity = 0.5
            obj = e.target
            // 通过 dataTransfer 来获取数据的存储和获取
            // setData(format,data) 
            // format 数据类型  text/html(url-list)
            // data 数据:一般来说，是字符串值
            e.dataTransfer.setData('text/html',e.target.id)
        }
        document.ondragend = function(e){
            e.target.style.opacity = 1            
        }

        // 应用于目标元素的事件
            // ondragenter 当拖曳元素进入目标元素时调用
            // ondragover 当拖曳元素停留目标元素时调用
            // ondrop 当拖曳元素在目标元素上松开鼠标时调用
            // ondragleave 当拖曳元素在离开目标元素时调用
     
        document.ondragover = function(e){
            e.preventDefault();
            
        }
        // 浏览器会默认阻止ondrag事件，我们可以在ondragover中阻止浏览器的默认行为
        document.ondragover = function(e){
            e.preventDefault();
        }

        document.ondrop = function(e){
            // e.target.appendChild(obj)
            // 通过 e.dataTransfer.setData存储的数据，只能在drop中获取
            var id = e.dataTransfer.getData('text/html')
            e.target.appendChild(document.getElementById(id))
        }

```

## web存储
- sessionStorage
    - sessionStorage使用，存储数据到本地，存储的容量5mb左右，
    - 这个数据本质是存储在 当前页面 的内存中，生命周期为关闭当前页面，即关闭页面，数据会自动删除

- localStorage
    - localStorage作用：存储的内容大概20mb
    - 在同一个浏览器中能共享数据，且生命周期为永久生效，并不会随着浏览器关闭而清除
setItem(key,value):存储数据，以键值对方式存储

getItem(key):获取数据,通过指定名称的key来获取,如果是空值，返回null

removeItem(key):删除数据,通过指定key来删除对应的值

clear():清空所有内容
```html
    <input type="text" id="username"><br/>
    <input type="button" value="设置数据" id="setData">
    <input type="button" value="获取数据" id="getData">
    <input type="button" value="删除数据" id="removeData">
```

```js
document.querySelector('#setData').onclick = function(){
    // 获取用户名
    var name = document.querySelector("#username").value
    // 存储数据
    window.sessionStorage.setItem('username',name)
}
document.querySelector("#getData").onclick = function(){
    var name = window.sessionStorage.getItem('username')
    alert(name)
}
document.querySelector("#removeData").onclick = function(){
    window.sessionStorage.removeItem('username')
}
```
```js
document.querySelector("#setData").onclick = function(){
    var name = document.querySelector("#username").value
    // localStorage 存储
    window.localStorage.setItem("username",name)
}
document.querySelector("#getData").onclick =function(){
    var name = window.localStorage.getItem('username')
    alert(name)
}
document.querySelector("#removeData").onclick= function(){
    window.localStorage.removeItem('username')
}
```

## 应用缓存
- manifest=""
```
CACHE MANIFEST
# 上面一句代码必须是当前文档第一句
# 后面写注释

# 需要缓存的文件清单列表
CACHE:
./1.jpg

# * 代表所有文件


# 配置每一次都从服务器获取的文件清单
NETWORK:
./1.jpg

# 配置如果文件无法获取则使用指定的文件进行替代
FALLBACK:
./1.jpg ./1.jpg

# / 代表所有文件
```
```html
<!DOCTYPE html>
<!-- manifest="" 应用程序缓存清单文件的路径，建议文件扩展名最好为appcache，文件的本质就是一个文本文件 -->
<html lang="en" manifest="应用程序缓存.appcache">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img{
            width: 400px;
            height: 200px;
        }
    </style>
</head>
<body>
    <img src="./1.jpg">
</body>
</html>
```

# CSS3
- 属性选择器
    - p[class] 表示含有class属性的p标签
    - p[class*=value]   表示含有class属性值为value的p标签
    - p[class^=value]   class属性值以value开头的p标签
    - p[class&=value]   class属性值以value结尾的p标签
- 伪类选择器
    - 兄弟伪类
        - .value~li 表示选择 class为value 的元素后面的所有 同级 的li元素
        - .value+li 表示选择 class为value 的元素后面 相邻 的li元素
    - 相对于父元素的结构伪类
        - p:first-child   表示选择 p标签的父元素中 的 第一个子元素 是p标签的元素
        - p:first-of-type 表示选择 p标签的父元素中 所有p标签中 的 第一个为p标签的元素

        - p:last-child   表示选择 p标签的父元素中 的最后一个子元素是p元素的标签
        - p:last-of-type 表示选择 p标签的父元素中 所有p标签中 的 最后一个为p标签的元素
        
        - p:nth-child(n)   表示选择 p标签的父元素中 第n个子元素为 p标签的元素
        - p:nth-of-type(n) 表示选择 p标签的父元素中 所有p标签中 的 第n个为p标签的元素
        
        - p:nth-of-type(-n+2) 表示选择 p标签的父元素中 所有p标签中 的 前二个为p标签的元素

        - p:empty 选择空的p标签
        - p:target 突出显示活动的锚链接
    
- 伪元素选择器（功能等价于dom元素，但不会在dom树生成,后期无法使用js操作）
    - p:before 表示 在 p元素之前插入新内容
    - p:after  表示 在 p元素之后插入新内容
    ```css
        .dv{
            background-color: pink; 
        }
        .dv::after{
            content: "";
            overflow: hidden;
        }
        .left{
            width: 200px;
            height: 100px;
            background-color: red;
            float: left;
        }
        .right::before{
            /* 必须添加content元素，否则不可见
            默认为行内元素，想要设置宽高，必须转化为块级元素 */
            content: "";
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 10px;
            position: absolute;
            left: -10px;
            top: -10px
        }
        .right::after{
            /* 必须添加content元素，否则不可见
            默认为行内元素，想要设置宽高，必须转化为块级元素 */
            content: "";
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 10px;
            position: absolute;
            left: -10px;
            bottom: -10px
        }
        .right{
            width: 100px;
            height: 100px;
            background-color: royalblue;
            float: left;
            position: relative;
        }
    ```
    ```html
    <div class="dv">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    ```
    
    - p:first-letter 文本的第一个字母
    - p:first-line 文本第一行
    - p:selection 设置当前选中内容的样式

## 颜色
- RGB(255,255,255) 0-255
- hsl(颜色(0-360),饱和度(0%-100%),亮度(0%-100%)) 
    - 亮度默认为50%，增大变白，减小变黑
- opacity:0.5 设置透明度，但如果作用于父元素，则子元素都会继承
- transparent 不可调节透明度，始终完全透明
- rgba(红,绿,蓝,透明度)  红绿蓝:0-255  透明度:0-1  不会影响子元素

## 文本阴影
- text-shadow(x(px),y(px),模糊(px),颜色)

## 边框阴影
- box-shadow(h(水平偏移量),v(垂直偏移量),blur(模糊),spread(阴影尺寸),color(颜色),inset(内阴影))

## 盒模型       
- box-sizing: content-box 设置的width属性仅仅是内容的宽度，盒子的实际宽度是 内容宽度+padding+border
- box-sizing: border-box 设置的width属性值就是盒子的最终宽度，该width包含内容宽度+border+padding，添加padding和border后，原width不变，但内容区会变小，网页结构没发生改变

## 边框圆角
- border-radius:10px  四个角
- border-radius:10px 20px 左上右下，左下右上
- border-radius:10px 30px 40px 左上，右上左下，右下
- border-radius:10px 30px 40px 60px 左上，右上，右下，左下
- border-radius: 100px/50px 椭圆
- border-top-left-radius:10px 左上角
- border-radius:10px 20px 30px 40px/10px 20px 30px 40px 
    - 水平方向:左上，右上，右下，左下 垂直方向:左上，右上，右下，左下

## 渐变
- 线性渐变
- background: linear-gradient(方向，开始颜色，位置，颜色2，位置，颜色3，位置)
    - 方向
        - to top:0deg
        - to right:90deg
        - to bottom:180deg
        - to left:270deg
- 径向渐变
- background: radial-gradient(形状 大小 坐标 ,颜色1，颜色1位置,颜色2，颜色2位置)
    - 形状(elipse 椭圆,circle圆形)，如果容器为正方形，则两者表现一样
    - 大小size：closest-side:最近边  farthest-side:最远边 closest-corner:最近角 farthest-corner:最远角 （默认是最远角）
    - 坐标: 默认 at position(at 50px 60px) left center right top bottom
- 重复渐变

## 背景
- background
    - background-repeat:space(不会缩放平铺)/round(缩放后再平铺)
    - background-size: 宽高值/auto(保持比例自动缩放)/宽高百分比(相对于父容器)/contain(按比例调整大小，(宽100%)使宽自动适应整个元素背景区。可能会造成容器有空白)/cover(背景图片按比例缩放自适应整个背景区域(高100%)，如果背景区域不足以包含，图片会溢出)
    - background-origin(背景坐标原点):border-box/padding-box/content-box
    - background-clip(背景裁切):border-box(显示border以内)/padding-box(显示padding以内)/content-box(显示内容以内)
- border-image
边框图片本质是背景，不会影响元素内容的放置，内容只会受border,padding影响
    - border-image-source:url() 指定边框图片的路径，默认填充容器的四个角
    - border-image-slice: 27 [full]; 设置四个方向裁剪距离，full：做内容的填充
    - border-image-width:27px 设置边框图片的宽度，如果没有设置，宽度默认为元素的原始的边框宽度
    - border-image-repeat:round(缩放后平铺)/repeat(直接平铺)
    - 缩写：border-image:source slice / width /outset repeatr

## 过渡 
一个状态到另一个状态
- transition
    - transition-property: 规定过渡效果的css属性(all 表示所有样式)
    - transition-duration: 控制运动时间
    - transition-timing-function: 设置时间函数，控制运动速度
    - transition-delay: 延迟时间
    - 简写: transiton: 属性名称 过渡时间 时间函数 延迟
- 不同浏览器的兼容处理：    
    - -moz-transition:
    - -webkit-transition:
    - -o-transition:

## 转换
- transform 
    - 2D
    - transform:translate(x,y)  2D移动 偏移值参照元素左上角，执行完毕后，回到原来的位置
    - transform:scale(x/x1,x2)  2D缩放 x<1 缩小 x>1放大 默认为1  不会影响其他元素
    - transform:rotate(360deg)  2D旋转 整数顺时针，负数逆时针旋转
    - transform:skew(30deg)  2D斜切  整数往当前轴负方向斜切，如果角度为负，则向当前轴的正方向斜切
    - transform-origin: 改变旋转轴心
    - 组合：transform:translate(500px) rotate(360deg) ; 移动+旋转

    - 3D
    - transform: translate3d(x,y,z)
    - transform: scale3d(x,y,z)
    - transform: rotate3d(x,y,z,120deg)
    - perspective: 30px(盒子的距离)  透视效果
    - perspective-origin: 100px 0px;   透视观察角度

## 动画
创建动画
```css
@keyframes moveText{
    /* 百分比为每个动画耗时的百分比 */
    0%{
        transform: translate(0,0)
    }
    50%{
        transform: translate(600px,100px)
    }    
    100%{
        transform: translate(500px,200px)
    }
}
```
- 动画属性
    - animation-name: 创建的动画名称    添加动画效果
    - animation-duration:              动画总耗时
    - animation-iteration-count:infinite(无限)   动画循环次数
    - animation-direction: alternate  交替动画
    - animation-delay:  动画延迟
    - animation-fill-mode: forwards(保留结束的状态) backwards(如果动画有初始状态，会立刻进入) both(forwards和backwards) 
    - animation-play-state:runing(播放) paused(暂停)

## 字体图标
6666666666
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    @font-face {
      font-family: 'iconfont';
      src: url('./字体图标/font/iconfont.eot');
      src: url('./字体图标/font/iconfont.eot?#iefix') format('embedded-opentype'),
          url('./字体图标/font/iconfont.woff2') format('woff2'),
          url('./字体图标/font/iconfont.woff') format('woff'),
          url('./字体图标/font/iconfont.ttf') format('truetype'),
          url('./字体图标/font/iconfont.svg#iconfont') format('svg');
    }
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: blueviolet
    }
    /* 自定义字体图标的名称 */
    .smile::before{
        content: "\e616"
    }
    </style>
</head>
<body>
    <span class="iconfont smile"></span>
</body>
</html>
```

## 布局
- columns 布局
    - column-count: 设置列数
    - column-rule: 添加列间隙，和边框样式一样
    - column-gap:  设置列间隙大小
    - column-span: 规定跨几列
- 伸缩布局
    - display:flex
        - justify-content: 子元素在主轴上的排列方式
            - justify-content: flex-start(从父容器开始位置排列)
            - justify-content: flex-end(从父容器结束位置排列)
            - justify-content: center(从父容器中间位置排列)
            - justify-content: space-between(左右对齐，中间平分)
            - justify-content: space-around(将多余的平均分配到每一个子元素的 两边 )
        - align-items:  子元素在垂直轴上的排列方式
            - 同上

        - flex-flow: (是flex-wrap(是否换行) 和 flex-derection(设置主轴方向) 的组合)
            - flex-wrap: warp(换行) nowarp(不换行) warp-reverse(翻转)
            - flex-derection: row(水平方向,从左到右) row-reverse column(垂直方向,从上到下) column-reverse
        - flow-grow: 整数  默认为0，扩展子元素的宽度（写在子元素里），设置当前元素应该占据剩余空间的比例值，比例值计算：flex-grow/所有兄弟子元素的flex-grow和
        - flow-shrink:整数   默认为1，定义收缩比例  比例值计算：flex-shrink/所有兄弟子元素的flex-shrink
        - flex:  指定弹性子元素如何分配空间 计算方式：当前子元素flex值/所有子元素flex值和
        - order:  设置弹性盒子的子元素排列顺序,数值越小，越靠前,可以为负数
