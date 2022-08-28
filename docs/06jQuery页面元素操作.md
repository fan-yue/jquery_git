## 页面元素操作

### 创建DOM节点

#### 	`$(DOM节点内容）`

```
$('<p><span>这是使用jQuery添加的内容</span></p>');
```



<hr>

### 在内部添加DOM节点

#### 	`append（）`

将创建的`DOM`节点放入所添加元素的后面

#### 	`appenTo（）`

#### 	`prepend（）`

将创建的`DOM`节点放入所添加元素的前面

#### 	`prependTo（）`

**代码示例**

```
   <div class="box">
        <p>测试用的</p>
    </div>
    
   <script>
        // 创建DOM节点,$(DOM节点内容）
        var dom = $('<p><span>这是使用jQuery添加的内容</span></p>');
        // append（）
        // $('.box').append(dom);
        // appenTo（）
        // $(dom).appendTo($('.box'));
        // prepend（）
        // $('.box').prepend(dom);
        // prependTo（）
        // $(dom).prependTo($('.box'));
    </script>
```




<hr>

### 在外部添加DOM节点

#### 	`before（）`

将创建的`DOM`节点放入所添加元素的前面**（同级添加）**

#### 	`insertBefore（）`

#### 	`after（）`

将创建的`DOM`节点放入所添加元素的后面**（同级添加）**

#### 	`insertAfter（）`

```
    <div class="box1">
        <p>测试用的</p>
    </div>
    <hr>
    

    <script>
        // 创建DOM节点,$(DOM节点内容）
        var dom1 = $('<p><span>这是使用jQuery添加的内容</span></p>');
        // before（）
        // $('.box1').before(dom1);
        // insertBefore（）
        // $(dom1).insertBefore($('.box1'));
        // after（）
        // $('.box1').after(dom1);
        // insertAfter（）
        // $(dom1).insertAfter($('.box1'));
    </script>
```

<hr>

### 复制DOM节点

#### 	`clone（）`

```
    <div class="box2">
        <p>测试用的</p>
    </div>

    <script>
        // 克隆对应的节点
        var one = $('p').clone();
        // 添加到对应的位置
        $('.box2').append(one);
    </script>
```



#### 	`clone（true）`

```
    <div class="box2">
        <p>测试用的</p>
    </div>

    <script>
        $('p').click(function(){
            alert('测试');
        })
        // 克隆对应的节点
        var one = $('p').clone(true);
        // 添加到对应的位置
        $('.box2').append(one);
    </script>
```



`clone（）`与`clone（true）`的区别：true会带上克隆所绑定的事件



<hr>

### 删除DOM节点

#### `remove（）`

删除当前DOM及子元素

#### `remove（dom节点）`

在同级DOM中删除指定的DOM

#### `empty（）`

删除当前DOM下的子元素，保留当前DOM



```

    <div class="box2">
        <p>测试用的</p>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
    <div class="box2" title="a">
        <p>测试用的</p>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>

    <script>
        // remove（）删除节点，所有东西全部移除
        // $('.box2').remove();
        // empty（）,只清除相关元素的内部内容
        // $('.box2').empty();
        // remove（dom节点），删除有相关属性的元素
        $('.box2').remove('[title]');
    </script>
```

