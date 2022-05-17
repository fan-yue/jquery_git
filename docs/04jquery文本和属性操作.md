## jQuery - 获取文本内容



### text() - 设置或返回所选元素的文本内容

`text( )` ,为空，获取内容

`text( 值 )`, 修改内容

```
    <button id="btn">集成按钮，可以显示也可以隐藏</button>
    <div class="a" style="width:200px;position: relative;">
        123
    </div>
    <script>
        $('#btn').click(function(){
            var text = $('.a').text();
            alert(text);
        })
    </script>
```



### html() - 设置或返回所选元素的内容（包括 HTML 标记）

`html( )`为空，获取内容

`html( 值 )`，修改内容

```
    <button id="btn">集成按钮，可以显示也可以隐藏</button>
    <div class="a" style="width:200px;position: relative;">
        <b>123</b>
    </div>
    <script>
        $('#btn').click(function(){
            var text = $('.a').html();
            alert(text);
        })
    </script>
```



### val() - 设置或返回表单字段的值

```
    <button id="btn">集成按钮，可以显示也可以隐藏</button>
    <input type="text" class="a" value="获取文字内容">
    <script>
        $('#btn').click(function(){
            var text = $('.a').val();
            alert(text);
        })
    </script>
```



## jQuery - 获取属性



### attr() 方法用于获取属性值

```
    <button id="btn">集成按钮，可以显示也可以隐藏</button>
    <input type="text" class="a" value="获取文字内容">
    <script>
        $('#btn').click(function(){
            var val = $('.a').attr('type');
            alert(val)
        })
    </script>
```

