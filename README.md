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



## 选择器

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

```
    <div id="a">
        123
    </div>
    <script>
        // 类选择器
        $('#a').hide();
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



### 更多`其他`选择器写法

| 语法                     | 描述                                                    |
| :----------------------- | :------------------------------------------------------ |
| $("*")                   | 选取所有元素                                            |
| $(this)                  | 选取当前 HTML 元素                                      |
| $("p.intro")             | 选取 class 为 intro 的 <p> 元素                         |
| $("p:first")             | 选取第一个 <p> 元素                                     |
| $("ul li:first")         | 选取第一个 <ul> 元素的第一个 <li> 元素                  |
| $("ul li:first-child")   | 选取每个 <ul> 元素的第一个 <li> 元素                    |
| $("[href]")              | 选取带有 href 属性的元素                                |
| $("a[target='_blank']")  | 选取所有 target 属性值等于 "_blank" 的 <a> 元素         |
| $("a[target!='_blank']") | 选取所有 target 属性值不等于 "_blank" 的 <a> 元素       |
| $(":button")             | 选取所有 type="button" 的 <input> 元素 和 <button> 元素 |
| $("tr:even")             | 选取偶数位置的 <tr> 元素                                |
| $("tr:odd")              | 选取奇数位置的 <tr> 元素                                |



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



### 
