### jQuery尺寸

| 语法                                   | 用法                                                    |
| -------------------------------------- | ------------------------------------------------------- |
| `width()`/`height()`                   | 获取、设置元素宽度和高度值。只算`width`/`height`        |
| `innerWidth()`/`innerHeight()`         | 获取元素宽度和高度值。包含 `padding`                    |
| `outerWidht()`/`outerHeight()`         | 获取元素宽度和高度值 。包含`padding`、`border`          |
| `outerWidth(true)`/`outerHeight(true)` | 获取元素宽度和高度值。包含`padding`、`border`、`margin` |

- 以上参数为空，是获取，返回的数值类型
- 参数为数字，则是修改相对应的值。



<hr>



#### `width()`/`height()`

​	获取、设置元素宽度和高度值。只算`width`/`height`

​	**代码片段**

```html
    <style>
        div{
            width: 200px;
            height: 200px;
            border: 10px solid black;
            background-color: aquamarine;
        }
    </style>
</head>
<body>
    <div>123</div>

    <script>
        var width = $('div').width(100);
        var he = $('div').height(100);
        console.log(width,he);
    </script>
```



<hr>



#### `innerWidth()`/`innerHeight()`

​	获取元素宽度和高度值。包含 `padding`

​	**代码片段**

```html
    <style>
        div{
            width: 200px;
            height: 200px;
            border: 10px solid black;
            background-color: aquamarine;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div>123</div>

    <script>
        $('div').innerWidth('100');
        var wi = $('div').innerWidth();
        console.log(wi);
    </script>
```



<hr>

#### `outerWidht()`/`outerHeight()`

​	获取元素宽度和高度值 。包含`padding`、`border`

```html
    <style>
        div{
            width: 200px;
            height: 200px;
            border: 10px solid black;
            background-color: aquamarine;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div>123</div>

    <script>
        $('div').outerWidth(100)
        var a = $('div').outerWidth();
        console.log(a);
    </script>
```



<hr>

#### `outerWidth(true)`/`outerHeight(true)`

​	获取元素宽度和高度值。包含`padding`、`border`、`margin`

```html
    <style>
        div{
            width: 200px;
            height: 200px;
            border: 10px solid black;
            background-color: aquamarine;
            padding: 10px;
            margin: 1px;
        }
    </style>
</head>
<body>
    <div>123</div>

    <script>
        var a = $('div').outerWidth(true);
        console.log(a);
    </script>
```



<hr>

### JQuery位置

位置主要的三个方法：`offset()`、`position()`、`scrollTpo()/scrollLeft()`



#### `offset()`设置或获取元素偏移

1. `offset()` 方法设置或返回被选元素相对于**文档**的偏移坐标，跟父级无关。
2. 该方法有2个属性，`left`、`top`。
    - `offset().top`用于获取距离文档顶部的距离
    - `offset().left`用于获取距离文档左侧的距离
3. 可以通过设置元素的偏移：`offset({top:10,left:30})`

```html
    <style>
        .father{
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        .son{
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">

        </div>
    </div>
    <script>
        // 获取
        var off = $('.son').offset();
        console.log(off);
        // 设置
        var offset = $('.son').offset({
            top:50,
            left:50
        })
    </script>
```



<hr>



#### `position()`获取元素偏移

1. `position()`方法用于返回被选元素相对于`带有定位的父级`偏移坐标，如果父级未设置定位，则以文档为准。

```html
    <style>
        .father{
            width: 200px;
            height: 200px;
            background-color: pink;
            position: absolute;
        }
        .son{
            width: 100px;
            height: 100px;
            background-color: red;
            position: relative;
            top: 10px;
            left: 10px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">

        </div>
    </div>
    
    <script>
        var fix = $('.son').position();
        console.log(fix);
    </script>
```



<hr>



#### `scrollTpo()/scrollLeft()`设置或获取元素被卷去的头部和左侧

1. `scrollTpo()`方法设**置或返回**被选元素被卷去的**头部**。

   1. 获取括号内为**空**
   2. 设置括号内为**数值**

   ```html
       <style>
           *{
               margin: 0 auto;
           }
           .box{
               width: 400px;
               height: 2000px;
               background-color: darkturquoise;
               margin: 200px auto;
           }
       </style>
   </head>
   <body>
       <div class="box">
   
       </div>
   
       <script>
           $(window).scroll(function(){
               var a = $(document).scrollTop();
               console.log(a);
           })
       </script>
   ```

   

   例子：当页面到对应位置，让隐藏div显示

   ```
   
   ```

   

2. `scrollLeft()`方法设**置或返回**被选元素被卷去的**左侧**。

   

   

