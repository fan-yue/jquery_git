## jquery中class操作

| 样式名      | 例子                                                         | 解释                                                |
| ----------- | ------------------------------------------------------------ | --------------------------------------------------- |
| addClass    | $("元素").addClass("样式1") 或者 $("元素").addClass("样式1 样式2..") | 给元素追加新样式                                    |
| removeClass | $("元素").removeClass("样式1") 或者 $("元素").removeClass("样式1 样式2..") | 移除元素的样式                                      |
| hasClass    | $("元素").hasClass("样式1")                                  | 查找元素是否存在该样式                              |
| is          | $("元素").is(".样式1")                                       | 查找元素是否存在该样式，注意样式名称写的时候需要加. |
| toggleClass | $("元素").toggleClass("样式1")                               | 切换样式                                            |

### addClass()	给元素追加新样式

$("元素").addClass("样式1") 或者 $("元素").addClass("样式1 样式2..")

`css`

```
.a{color:brown}
.b{width:100px;height: 100px;background: crimson;}
```

`html`

```
    <div>我爱学习</div>
    <button>点我一下</button>
    <script>
        //非行间样式--添加 addClass
        // $("div").addClass('a'); 
        //添加多个样式,多个样式之间用空格隔开
        $("div").addClass("a b");
    </script>
```



### removeClass()	移除元素的样式

$("元素").removeClass("样式1") 或者 $("元素").removeClass("样式1 样式2..")

`css`

```
.a{color:brown}
.b{width:100px;height: 100px;background: crimson;}
```

`html`

```
    <div class="a b">我爱学习</div>
    <button>点我一下</button>
    <script>
        //移除样式-- removeClass
        // $("div").removeClass("a")
        //移除多个
        // $("div").removeClass("a b")
        //如果有很多的样式都需要移除，那么就直接不给参数
        $("div").removeClass()
    </script>
```



### toggleClass()	切换样式

$("元素").toggleClass("样式1")

`css`

```
.a{color:brown}
.b{width:100px;height: 100px;background: crimson;}
```

`html`

```
    <div class="a b">我爱学习</div>
    <button>点我一下</button>
    <script>
        //开关样式（切换样式）
        //需求：点击按钮之后可以让样式自由的切换
        $("button").click(function(){
            //可以添加一个样式，也可以添加多个样式
            $("div").toggleClass("a b");
        })
    </script>
```



### is()	查找元素是否存在该样式

$("元素").is(".样式1")

`css`

```
.a{color:brown}
.b{width:100px;height: 100px;background: crimson;}
```

`html`

```
    <div class="b">我爱学习</div>
    <button>点我一下</button>
    <script>
        //判断元素身上是否存在某样式
        //注意：is方法在判断的时候必须要加.
        //以防多个开发工程师针对这一个元素设置名称会有冲突现象
        if($("div").is(".a")==false){
            $("div").addClass("a");
        }
    </script>
```

### hasClass()  查找元素是否存在该样式

$("元素").hasClass("样式1")

`css`

```
.a{color:brown}
.b{width:100px;height: 100px;background: crimson;}
```

`html`

```
    <div class="b">我爱学习</div>
    <button>点我一下</button>
    <script>
        //注意：写法上不需加.
        console.log($("div").hasClass("a"))
    </script>
```



### 案例：选项卡效果

`js`中的选项卡

```
    <style>
        *{margin:0px;padding: 0px;list-style-type: none;;}
        #Tab{width:300px;height: 300px;border:1px solid #000000;margin:120px auto;}
        #Tab ul li{float: left;width:100px;height: 50px;line-height: 50px;text-align: center;}
        #Tab ul li.active{color:#ffffff;background: cornflowerblue;}
        #Tab div{display: none;}
        #Tab div.active{display: block;}
    </style>
</head>
<body>
    <div id="Tab">
        <ul>
            <li class="active">关注</li>
            <li>推荐</li>
            <li>导航</li>
        </ul>
        <div class="active">关注内容</div>
        <div>推荐内容</div>
        <div>导航内容</div>
    </div>
    <script>
        var li = document.getElementById("Tab").getElementsByTagName("li")
        var div = document.getElementById("Tab").getElementsByTagName("div")
        for(var i = 0 ; i <li.length;i++){
            (function(index){
                li[i].onclick = function(){
                    for(var j = 0; j <li.length;j++){
                        li[j].className = ""
                        div[j].className = ""
                    }
                    this.className = "active"
                    div[index].className = "active";
                }
            })(i)
        }
    </script>
</body>
```

`JQ`中的选项卡

```
    <style>
        *{margin:0px;padding: 0px;list-style-type: none;;}
        #Tab{width:300px;height: 300px;border:1px solid #000000;margin:120px auto;}
        #Tab ul li{float: left;width:100px;height: 50px;line-height: 50px;text-align: center;}
        #Tab ul li.active{color:#ffffff;background: cornflowerblue;}
        #Tab div{display: none;}
        #Tab div.active{display: block;}
    </style>
</head>
<body>
    <div id="Tab">
        <ul>
            <li class="active">关注</li>
            <li>推荐</li>
            <li>导航</li>
        </ul>
        <div class="active">关注内容</div>
        <div>推荐内容</div>
        <div>导航内容</div>
    </div>
    <script>
        //获取所有的li
        $("#Tab>ul>li").click(function(){
            //点到的是谁？？
            // console.log($(this).addClass("active"))
            //点击的同时，让当前被点击的元素的同胞元素移除样式
            $(this).addClass("active").siblings().removeClass("active") //链式操作
            //找到点击的li的对应下标
            // console.log($(this).index())
 $('#Tab>div').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })
    </script>
</body>
```



## jquery中css的操作

| 样式名                                             | 解释             |
| -------------------------------------------------- | ---------------- |
| jQuery 对象 .css(‘样式名’, ‘值’);                  | 给元素添加单样式 |
| jQuery 对象 .css({‘样式名’: ‘值’,‘样式名’: ‘值’}); | 给元素添加多样式 |
| jQuery 对象 .css(‘样式名’);                        | 获取元素的样式   |

**【注】如果样式名称中带有"-"的，需要写成驼峰命名法。**

### jQuery 对象 .css(‘样式名’, ‘值’);

给元素添加单样式

```
    <span>123</span>
    <button>改变样式</button>
    <script>
        //点击button 按钮之后给span标签添加行内样式
        $("button").eq(0).click(function(){
            //给元素设置样式
            $("span").css('color','#ff0000');
        })
    </script>
```



### jQuery 对象 .css({‘样式名’: ‘值’,‘样式名’: ‘值’});

给元素添加多样式

```
    <span>123</span>
    <button>改变样式</button>
    <script>
        //点击button 按钮之后给span标签添加行内样式
        $("button").eq(0).click(function(){
            //给元素添加多样式
            $("span").css({
                "width":"100px",
                "height":'100px',
                'color':"#ff0000",
                'display':'block'
            })
        })
    </script>
```



### jQuery 对象 .css(‘样式名’); 

  获取元素的样式

```
    <span>123</span>
    <button>改变样式</button>
    <script>
        //获取样式
        var width = $("span").css('width')
        console.log(width);
    </script>
```

