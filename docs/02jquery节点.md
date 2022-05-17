**jquery节点操作**

查找节点（子节点、父节点、筛选某些条件下的节点）

| 方法名                                    | 解释                                                      |
| ----------------------------------------- | --------------------------------------------------------- |
| 元素.children() \| 元素.children("元素")  | 当前元素的直接子节点，不考虑其它间接后代节点              |
| 元素.siblings()  \| 元素.siblings(“元素”) | 当前元素的兄弟节点,不包含当前自身节点                     |
| 元素.parent()                             | 当前元素的直接父节点                                      |
| 元素.parents()                            | 当前元素的所有父节点                                      |
| 父元素.find("元素")                       | 先找到父元素，再查找父元素下面的子元素，find 查找子孙节点 |
| 元素.filter("元素")                       | 先找到外层的元素，再过滤找到filter中的元素                |
| 元素.not("元素")                          | 同 filter 相反，排除not中的元素                           |



## jQuery 遍历 - 后代

### children(selector) 方法

`children()` 方法返回被选元素的所有直接子元素。

该方法只会向下一级对 DOM 树进行遍历。

```
    <div class="nav">
        <p>nav的亲儿子</p>
        <div>
            <p>nav的孙子</p>
        </div>
        <p class="p2">nav的亲儿子</p>
    </div>

    <script>
        var a = $('.nav').children('.p2').css('color','red');
        console.log(a);
    </script>
```



### find(selector) 方法

`find()` 方法返回被选元素的**后代元素**，一路向下直到最后一个后代。

下面的例子返回属于 `<div>` 后代的所有 `<span>` 元素

```
    <div class="nav">
        <p>nav的亲儿子</p>
        <div>
            <p>nav的孙子</p>
            <span>nav的孙子，span标签</span>
        </div>
        <p class="p2">nav的亲儿子</p>
    </div>

    <script>
        var a = $('.nav').find('span').css('color','red');
        console.log(a);
    </script>
```





## jQuery 遍历 - 祖先

### parent() 方法	返回被选元素的直接父元素

`parent()` 方法返回被选元素的直接父元素。

该方法只会向上一级对 DOM 树进行遍历。

```
    <button id="btn">集成按钮，可以显示也可以隐藏</button>
    <ul>
        <li>123</li>
        <li>456</li>
        <li class="a">789</li>
    </ul>
    <script>
        $('#btn').click(function(){
            $('.a').parent().hide();
        })
    </script>
```



### parents() 方法

`parents()` 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (`<html>`)。

```
    <button class="btn">按钮</button>
    <div class="yeye">
        <div class="father">
            <p class="son">文本内容工</p>
        </div>
    </div>
    <script>
        $('.btn').click(function(){
            var ps = $('.son').parents();
            console.log(ps);
        })
    </script>
```





## jQuery 遍历 - 同胞(siblings)

### siblings(selector)	被选元素的所有同胞元素

```
    <ul>
        <li>123</li>
        <li>456</li>
        <li class="a">789</li>
        <li>012</li>
    </ul>
    <script>
        $('.a').siblings().css('color','red');
    </script>
```

### next() 	返回被选元素的下一个同胞元素

```
    <ul>
        <li>123</li>
        <li>456</li>
        <li class="a">789</li>
        <li>012</li>
    </ul>
    <script>
        $('.a').next().css('color','red');
    </script>
```



## filter( ) 过滤

先找到外层的元素，再过滤找到`filter`中的元素

```
    <div id="box">
        <span>1</span>
        <span>2</span>
        <span class="sp">sp3</span>
        <span>4</span>
        <span class="sp">5</span>
        <span class="sp">6</span>
    </div>
    <script>
        //找span中class名称叫sp的
        //filter:过滤
        var a = $("#box>span").filter(".sp").css('color','red')
        console.log(a);
    </script>
```



## not( )  排除not中的元素

```
    <div id="box">
        <span>1</span>
        <span>2</span>
        <span class="sp">sp3</span>
        <span>4</span>
        <span class="sp">5</span>
        <span class="sp">6</span>
    </div>
    <script>
        //找到span中class名称不带sp的
        $("#box>span").not('.sp').css('color','red');
        console.log($("#box>span").not('.sp'))
    </script>
```

