## jQuery 使用版本

`$.fn.jquery` 

```
$.fn.jquery
'3.6.0'
```



## jquery语法

jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。

基础语法： $(selector).action()

- 美元符号定义 jQuery
- 选择符（selector）"查询"和"查找" HTML 元素
- jQuery 的 `action()` 执行对元素的操作

实例:

- $(this).hide() - 隐藏当前元素
- $("p").hide() - 隐藏所有 `<p>` 元素
- $("p.test").hide() - 隐藏所有 class="test" 的 `<p>` 元素
- $("#test").hide() - 隐藏 id="test" 的元素



## 文档就绪事件

```
$(document).ready(function(){
    // 执行代码
});
或者
$(function(){
    // 执行代码
});
```

`例子`

```
// 正常写法
$(document).ready(function(){
    alert('测试')
})
// 简写
$(function(){
    alert('测试')
})
```



## 基本选择器

jQuery 选择器允许您对 HTML 元素组或单个元素进行操作。

jQuery 选择器基于元素的 **id、类、类型、属性、属性值**等"查找"（或选择）HTML 元素。 它基于已经存在的 [CSS 选择器](https://www.runoob.com/cssref/css-selectors.html)，除此之外，它还有一些自定义的选择器。

jQuery 中所有选择器都以美元符号开头：**$()**。



### 元素选择器

```
    <div>
        123
    </div>
    <script>
        // 类选择器
        $('div').hide();
    </script>
```



### id选择器

​	多个相同的id选择器，只有第一个id会生效

```
	<div id="one">123</div>
    <div id="one">456</div>
    <div id="one">789</div>
    <div id="one">000</div>

    <script>
        $('#one').css('color','blue');
    </script>
```



### 类选择器

```
    <div class="a">
        123
    </div>
    <script>
        // 类选择器
        $('.a').hide();
    </script>
```



### * 选择器

选取所有元素



### 并集选择器

| 并集选择器使用逗号分隔， | $(“div,p,li”); | 只要符合条件之一就可。 |
| ------------------------ | -------------- | ---------------------- |

```
    <div>element</div>  
    <p>element</p>
    <span class="el">element</span>
    <script>
        $(function(){
            // 多个选择器
            $('div,p,.el').css({
                background:'red',
                color:'white'
            })
        })
    </script>
```



## 层次选择器

### 后代选择器 

| 后代选择器           | $(“ul li”);     | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 |
| -------------------- | --------------- | ---------------------------------------------------------- |
| 选择所有的后代子元素 | 选择器1 选择器2 | 选择选择器1的**所有**后代元素（选择器2）                   |



```
    <!-- 后代选择器 -->
    <div class="warpper">
        <span>span1</span>
        <div class="box">
            <span>2</span>
        </div>
    </div>

    <script>
        $(function(){
            $('.warpper span').css({
                color:'red'
            })
        })
    </script>
```



<hr>

### 子代选择器

| 子代选择器            | $(“ul>li”);     | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素 |
| --------------------- | --------------- | ----------------------------------------------------------- |
| 只选择选择器1的子元素 | 选择器1>选择器2 |                                                             |

```
    <!-- 子代选择器 -->
    <div class="warpper">
        <span>span1</span>
        <div class="box">
            <span>2</span>
        </div>
    </div>

    <script>
        $(function(){
            $('.warpper > span').css({
                color:'green'
            })
        })
    </script>
```



<hr>



### 兄弟元素（相邻元素）选择器

| 名称                       | 用法            | 解释                                            |
| -------------------------- | --------------- | ----------------------------------------------- |
| 兄弟元素（相邻元素）选择器 | 选择器1+选择器2 | 选择紧挨着的选择器1的第一个相邻元素（兄弟元素） |

```
    <!-- 兄弟元素（相邻元素）选择器 -->
    <div class="wa">   
    </div>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <div class="test">test</div>

    <script>
        $(function(){
            $('.wa+p').css('color','red');
        })
    </script>
```



**注意**：无法出效果，因为**.test**不是**相邻的元素**，所以效果不出来。

```
    <!-- 兄弟元素（相邻元素）选择器 -->
    <div class="wa">   
    </div>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <div class="test">test</div>

    <script>
        $(function(){
            $('.wa+.test').css('color','red');
        })
    </script>
```



<hr>

### 兄弟元素（所有）

| 名称                   | 用法            | 解释                      |
| ---------------------- | --------------- | ------------------------- |
| 兄弟元素（所有）选择器 | 选择器1~选择器2 | 选择选择器1的所有兄弟元素 |



```
    <!-- 兄弟元素（所有）选择器 -->
    <div class="wa">   
    </div>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <div class="test">test</div>

    <script>
        $(function(){
            $('.wa~p').css('color','red');
        })
    </script>
```



<hr>

## 简单过滤选择器


### `:first或者first()`

​	选择第一个元素



### `:last获last()`

​	选择最后一个元素



### `:not(selector)`

​	选择除了这个**selector**之外的元素



### `:even或者even()`

​	选择奇数元素



### `:odd或者odd()`

​	选择偶数元素



### `:eq(index)`

​	选择第n个元素



### `:gt(index)`

​	选择大于第n个后的元素，不包含n，按照下标走。



### `:lt(index)`

​	小于第n个后的元素，不包含n，按照下标走。



### `:header`

​	选择h1~h6所有标题元素



<hr>



## 内容过滤选择器

### `:contains(text)`

​	选择获取包含指定文本内容的元素



### `:empty`

​	选择获取不包含子元素或文本内容的元素



### `:parent`

​	选择获取含有子元素或文本的元素



### `:has(selector)`

​	选择获取含有选择器所匹配的元素



<hr>

## 可见性过滤器

### `:hidden`

​	选择display:none或者隐藏文本域（hidden）的元素



### `:visible`

​	选择display:block的元素

<hr>

## 表单过滤选择器

### `:input`

选择所有的的`input`标签

### `:button`

选择`input`标签中`type`值为`button`类型的

### `:submit`

选择`input`标签中`type`值为`submit`类型的

### `:text`

选择`input`标签中`type`值为`text`类型的

### `:password`

选择`input`标签中`type`值为`password`类型的

<hr>

**代码实列：**

```
    <form action="">
        <input type="text">
        <br>
        <input type="password" name="" id="">
        <br>
        <input type="button" value="">
        <br>
        <input type="submit" value="">
        <br>
        <button>按钮</button>
    </form>

    <script>
        // :input
        $(':input').css('color','red');

        // :button
        // $(':button').val('测试');
        
        // :submit
        // $(':submit').val('哈哈');

        // :text
        // $(':text').val('text文本测试');

        // :password
        // $(':password').val('密码框');
    </script>
```




### 总结：大部分<font color=red>jquery</font>的选择器跟css的选择器用法一模一样。



### 更多`其他`选择器写法

| 语法                     | 描述                                                        |
| :----------------------- | :---------------------------------------------------------- |
| $("*")                   | 选取所有元素                                                |
| $(this)                  | 选取当前 HTML 元素                                          |
| $("p.intro")             | 选取 class 为 intro 的 `<p>` 元素                           |
| $("p:first")             | 选取第一个 `<p>` 元素                                       |
| $("ul li:first")         | 选取第一个 `<ul>` 元素的第一个 `<li>` 元素                  |
| $("ul li:first-child")   | 选取每个 `<ul>` 元素的第一个 `<li>` 元素                    |
| $("[href]")              | 选取带有 href 属性的元素                                    |
| $("a[target='_blank']")  | 选取所有 target 属性值等于 "_blank" 的 `<a>` 元素           |
| $("a[target!='_blank']") | 选取所有 target 属性值不等于 "_blank" 的 `<a>` 元素         |
| $(":button")             | 选取所有 type="button" 的 `<input>` 元素 和 `<button>` 元素 |
| $("tr:even")             | 选取偶数位置的 `<tr>` 元素                                  |
| $("tr:odd")              | 选取奇数位置的 `<tr>` 元素                                  |



# DOM操作

### 属性操作

#### 获取属性值

​      `attr(属性名）`

#### 设置属性

​      attr(属性名，属性值）

#### 删除属性

​      `removeAttr(属性名）`



```
    <!-- 
    属性操作
        获取属性值
            attr(属性名）
        设置属性
            attr(属性名，属性值）
        删除属性
            removeAttr(属性名）
     -->

    <img src="./images/1.jpg" alt="logo1">
    <img src="./images/01.jpg" alt="logo2">

    <script>
        // 获取属性值,attr(属性名）
        /* var one = $('img').eq(0).attr('src');
        console.log(one); */
        
        // 设置属性,attr(属性名，属性值）
        // $('img').eq(0).attr('src','./images/01.jpg');

        // 删除属性,removeAttr(属性名）
        // $('img').eq(0).removeAttr('src');
    </script>
```



<hr>

### 文本内容操作

#### 获取文本及表单组件内容

##### 	`html（）`

​		可以操作标签

##### 	`text（）`

​		只能操作文本内容，不操作标签

##### 	`val（）`

​		只能用于表单组件

<hr>

#### 设置（修改）文本及表单组件内容

##### 	`html（内容）`

##### 	`text（内容)`

##### 	`val（内容）`

<hr>

#### 删除文本及表单组件内容

##### `html（‘’）`

##### `text（‘’）`

##### `val（‘’）`



```
    <p>
        <a href="#">
            <span>这是内容</span>
        </a>
    </p>
    <input type="text" value="文本表单组件">

     <script>
        //  获取文本及表单组件内容
        // var one = $('p').html();
        // var one = $('p').text();
        // var one = $('input').val();
        // console.log(one);

        // 设置（修改）文本及表单组件内容
        // $('p').html('<b>加粗内容</b>');
        // $('p').text('<b>加粗内容</b>');
        // $('input').val('12312')

        // 删除文本及表单组件内容
            // p标签存在，但是文本内容没有了
        // $('p').html('');
        // $('p').text('');
        // $(':text').val('');
     </script>
```



# jQuery 事件

什么是事件？

页面对不同访问者的响应叫做事件。

事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。

实例：

- 在元素上移动鼠标。
- 选取单选按钮
- 点击元素

在事件中经常使用术语"触发"（或"激发"）例如： "当您按下按键时触发 keypress 事件"。

常见 DOM 事件：

| 鼠标事件                                                     | 键盘事件                                                     | 表单事件                                                  | 文档/窗口事件                                                |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| [click](https://www.runoob.com/jquery/event-click.html)      | [keypress](https://www.runoob.com/jquery/event-keypress.html) | [submit](https://www.runoob.com/jquery/event-submit.html) | [load1.8版本已废弃](https://www.runoob.com/jquery/event-load.html) |
| [dblclick](https://www.runoob.com/jquery/event-dblclick.html) | [keydown](https://www.runoob.com/jquery/event-keydown.html)  | [change](https://www.runoob.com/jquery/event-change.html) | [resize](https://www.runoob.com/jquery/event-resize.html)    |
| [mouseenter](https://www.runoob.com/jquery/event-mouseenter.html) | [keyup](https://www.runoob.com/jquery/event-keyup.html)      | [focus](https://www.runoob.com/jquery/event-focus.html)   | [scroll](https://www.runoob.com/jquery/event-scroll.html)    |
| [mouseleave](https://www.runoob.com/jquery/event-mouseleave.html) |                                                              | [blur](https://www.runoob.com/jquery/event-blur.html)     | [unload](https://www.runoob.com/jquery/event-unload.html)    |
| [hover](https://www.runoob.com/jquery/event-hover.html)      |                                                              |                                                           |                                                              |



## jQuery 事件方法语法

在 jQuery 中，大多数 DOM 事件都有一个等效的 jQuery 方法。在页面中指定一个点击事件后可以通过一个事件函数实现。

```
    <div class="a">
        123
    </div>
    <script>
        $('div').click(function(){
            alert('ceshi')
        });
    </script>
```

### <font color=red>click()</font> 按钮点击事件

click() 方法是当**按钮点击事件**被触发时会调用一个函数。

该函数在用户点击 HTML 元素时执行。

在下面的实例中，当点击事件在某个 `<p>` 元素上触发时，隐藏当前的 <p> 元素：

```
$("p").click(function(){
  $(this).hide();
});
```

### dblclick() 双击

当双击元素时，会发生 dblclick 事件。

dblclick() 方法触发 dblclick 事件，或规定当发生 dblclick 事件时运行的函数：

```
$("p").dblclick(function(){
  $(this).hide();
});
```

### mouseenter()	鼠标指针穿过元素

当鼠标指针穿过元素时，会发生 mouseenter 事件。

mouseenter() 方法触发 mouseenter 事件，或规定当发生 mouseenter 事件时运行的函数

```
$("#p1").mouseenter(function(){
    alert('您的鼠标移到了 id="p1" 的元素上!');
});
```

### mouseleave()	鼠标指针离开元素

当鼠标指针离开元素时，会发生 mouseleave 事件。

mouseleave() 方法触发 mouseleave 事件，或规定当发生 mouseleave 事件时运行的函数

```
$("#p1").mouseleave(function(){
    alert("再见，您的鼠标离开了该段落。");
});
```

### mousedown()	鼠标指针移动到元素上方，并按下鼠标按键

当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件。

mousedown() 方法触发 mousedown 事件，或规定当发生 mousedown 事件时运行的函数：

```
$("#p1").mousedown(function(){
    alert("鼠标在该段落上按下！");
});
```

### mouseup()	在元素上松开鼠标按钮

当在元素上松开鼠标按钮时，会发生 mouseup 事件。

mouseup() 方法触发 mouseup 事件，或规定当发生 mouseup 事件时运行的函数

```
$("#p1").mouseup(function(){
    alert("鼠标在段落上松开。");
});
```

### <font color=red>hover()</font> 	光标悬停

hover()方法用于模拟光标悬停事件。

当鼠标移动到元素上时，会触发指定的第一个函数**(mouseenter**);当鼠标移出这个元素时，会触发指定的第二个函数(**mouseleave)**。

```
    <div class="a">
        123
    </div>
    <script>
        $(".a").hover(
            function(){
                console.log('你进入了 p1!');
            },
            function(){
                console.log('拜拜! 现在你离开了 p1!');
            }
        );
    </script>
```

### <font color=red>focus()</font>	元素获得焦点

当元素获得焦点时，发生 focus 事件。

当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点。

focus() 方法触发 focus 事件，或规定当发生 focus 事件时运行的函数：

```
$("input").focus(function(){
  $(this).css("background-color","#cccccc");
});
```



### <font color=red>blur()</font>	元素失去焦点

当元素失去焦点时，发生 blur 事件。

blur() 方法触发 blur 事件，或规定当发生 blur 事件时运行的函数：

```
$("input").blur(function(){
  $(this).css("background-color","#ffffff");
});
```

