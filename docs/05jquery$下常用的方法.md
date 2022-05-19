## $.each() 遍历

### `$("DOM元素").each(function (index, item){ XXX })` 	遍历DOM元素

语法结构：`$("DOM元素").each(function (index, item){})`

`index`：元素索引值

`item`：获取到对应的 `dom` 元素

```
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        $('div').each(function(index,domEle){
            // index，获取索引
            console.log(index);
            // domEle，获取到对应的 dom 元素，如果需要用jquery 的css()方法，需要转换成jquery元素
            // 获取的值如果是DOM对象，想要操作JQ的方法必须添加成jquery对象，包一层$
            console.log(domEle);
        })
    </script>
```

`例子`:使用`each()`给三个`div`添加不同的字体颜色样式

```
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        var arr = ['green','blue','red'];
        $('div').each(function(index,domEle){
            // index，获取索引
            console.log(index);
            // domEle，获取到对应的 dom 元素,如果需要用jquery 的css()方法，需要转换成jquery元素
            console.log(domEle);
            $(domEle).css('color',arr[index])
        })
    </script>
```

`例子`：使用`each()`将`div`中的三个值相加

```
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        var sum = 0;
        $('div').each(function(index,domEle){
            sum +=parseInt($(domEle).text());
        })
        console.log(sum);
    </script>
```



### `$.each(数组， function (index, item){ XXX });`	遍历数组

1.主要用于遍历数据，处理数据。比如数组，对象

2.里面的函数有两个参数：`index`是每个元素的索引号，`item`是遍历内容

`例子`：遍历一维数组

```
    <script>
        var arr = ['a','b','c'];
        $.each(arr,function(index,data){
            console.log(index);
            console.log(data);
        })
    </script>
```

`例子`：遍历二维数组

```
    <script>
        var arr = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        $.each(arr,function(index,value){
            console.log(value);
            //每一个一维数组再次循环
            $.each(value,function(k,v){
                console.log(v);
            })
        })
    </script>
```

`例子`

```
    <script>
        var arr = [
            {
                "username":"张三",
                "userpass":"123456"
            },
            {
                "username":"李四",
                "userpass":"123456"
            },
            {
                "username":"王五",
                "userpass":"123456"
            }
        ]
        $.each(arr,function(index,value){
            console.log(value.username);
        })
    </script>
```



### $.map【功能：遍历+修改】





### $.extend【功能：合并对象】