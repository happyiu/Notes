# Markdown
`总结一些自己常用的Markdown语法`

`标题类`

一级标题
=

# 一级标题

## 二级标题

`字体`

*斜体1* _斜体2_

**粗体1**  __粗体2__

***错斜体***  ___粗斜体___


`各种线`

*** 
---
~~删除线~~

<U>下划线</u>

`列表`

+ 第一项
    + 第二项
        + 第三项
- 第一项
    - 第二项
* 第一项

1. 第一项
2. 第二项

`区块`
> 1. 最外层引用
>> + 第二层引用
>>> - 第三层引用

`代码`
```js
 function add(a,b){
     return a + b
 }
```

`链接`

[百度](http://baidu.com)

<https://www.baidu.com>

`图片`
![替代文字](http://shadghasgdh)

<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">

`表格`
|   表头  |   表头   |    表头  |
|:--------|--------:|:--------:|
| 单元格   | 单元格  |   单元格  |
| 左对齐呀 | 右对齐呀 |  中间对齐 |

`其他`

<kbd>Ctrl</kbd>

`流程图`

```flow
st=>start: 开始 
e=>end: 登录 
io1=>inputoutput: 输入用户名密码 
sub1=>subroutine: 数据库查询子类 
cond=>condition: 是否有此用户 
cond2=>condition: 密码是否正确 
op=>operation: 读入用户信息

st->io1->sub1->cond 
cond(yes,right)->cond2 
cond(no)->io1(right) 
cond2(yes,right)->op->e 
cond2(no)->io1 
```