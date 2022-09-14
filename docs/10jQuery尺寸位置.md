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



### JQuery位置

