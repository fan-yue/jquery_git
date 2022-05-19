## jQuery - 获取文本内容

| 方法名 | 例子                                                         |
| ------ | ------------------------------------------------------------ |
| html   | jQuery  对象 .html(); //获取  或者<br /> jQuery 对象 .html( 值 ); //设置 ; <br />类似于 JavaScript 中的 innerHTML 属性 |
| text   | jQuery 对象 .text(); //获取 或者<br />jQuery 对象 .text( 值 ); //设置 ；<br />类似于 JavaScript 中的 innerText 属性 |
| val    | jQuery 对象 .val(); //获取 或者 <br />jQuery 对象 .val( 值 ); //设置 ；<br />类似于 JavaScript 中的 value 属性，只管表单元素 |

### text() - 设置或返回所选元素的文本内容

`text( )` ,为空，获取内容

`text( 值 )`, 修改内容

```
    <p>p标签的值</p>
    <p></p>
    <script>
        //text方法类似于JS中的innerText
        // 获取p标签的值
        var p1 = $('p').text();
        alert(p1);
        //标签的赋值
        //操作第一个p标签添加内容
        // $("p:first").text("hello world");
        // $("p:first").text("<b>hello world</b>")
        // $("p:first").next().text('offcn')
    </script>
```



### html() - 设置或返回所选元素的内容（包括 HTML 标记）

`html( )`为空，获取内容

`html( 值 )`，修改内容

```
    <p>p1标签的值</p>
    <p>p2标签得值</p>
    <script>
        //如果想要给标签中添加内容携带html标签，只能调用html的方法
        // console.log($("p:first").html("<b>hello world</b>"))
        // $("p:first").next().html('offcn')
        // console.log($("p").html())
    </script>
```



### val() - 设置或返回表单字段的值

```
    <input type="text" value="text表单的值">
    <script>
        // 使用val()方法获取表单的值
        var a = $('input').val();
        console.log(a);
        //给文本框添加value值??
        // $("input").val("hello world");
    </script>
```



```
text、html、val区别是什么
1、val方法只能获取表单元素的值，不能获取其他的闭合元素
2、text可以获取所有闭合元素的值而html方法只能获取所有元素的第一个元素的值
3、text方法只能添加非标签的普通内容，html可以添加带有html标签的内容
```



## jQuery - 属性操作

| 属性名     | 例子                                                         |
| ---------- | ------------------------------------------------------------ |
| attr       | `$('元素').attr('属性名'，属性值)`  ——  设置属性值<br />`$('元素').attr(‘属性名’)` —— 获取属性值 |
| prop       | `$('元素').prop('属性名'，属性值)` —— 设置属性<br />`$('元素').attr(‘属性名’)` —— 获取属性值<br />只能识别系统自带的属性 |
| removeAttr | `$("元素").removeAttr('属性名')` -- 移除属性                 |



### attr() 方法用于获取或者设置属性值

```
    <input type="text">
    <input type="checkbox">
    <button>选中</button>
    <button>不选中</button>

    <script>
        //给文本框添加一个size属性
        // $("input[type='text']").attr('size',100);
        //给标签添加自定义属性??
        // $("input[type='text']").attr('aa',true)
        // 获取aa属性的属性值
        // console.log( $("input[type='text']").attr('aa'))

        //给复选框添加选中属性
        // $("input[type='checkbox']").attr('checked','checked')
        //获取
        // console.log($("input[type='checkbox']").attr('checked'))

        // $("button").eq(0).click(function(){
        //     $("input[type='checkbox']").attr('checked',true)
        //     console.log($("input[type='checkbox']").attr('checked'))
        // })
        // $("button").eq(1).click(function(){
        //     $("input[type='checkbox']").attr('checked',false)
        //     console.log($("input[type='checkbox']").attr('checked'))
        // })
    </script>
```

### removeAttr()	移除属性

```
    <a href="#" target="_blank">链接</a>

    <script>
        $('a').removeAttr('target');
    </script>
```



### prop( ) 	用于获取或者设置属性值

```
    <input type="text">
    <input type="checkbox">
    <button>选中</button>
    <button>不选中</button>

    <script>
        // $("input[type='checkbox']").prop('aa',true);
        // console.log($("input[type='checkbox']").prop('aa'))
        // 文本框添加已有的属性
        // $("input[type='text']").prop('name','username')
        // console.log($("input[type='text']").prop('name'))

        // $("button").eq(0).click(function(){
        //     $("input[type='checkbox']").prop('checked',true)
        //     console.log($("input[type='checkbox']").prop('checked'))
        // })
        // $("button").eq(1).click(function(){
        //     $("input[type='checkbox']").prop('checked',false)
        //     console.log($("input[type='checkbox']").prop('checked'))
        // })
    </script>
```





### 案例：八大菜系选中、不选中、反选功能

```
八大菜系：
    <input type="checkbox">湘菜
    <input type="checkbox">川菜
    <input type="checkbox">粤菜
    <input type="checkbox">鲁菜
    <input type="checkbox">闽菜
    <input type="checkbox">苏菜
    <input type="checkbox">浙菜
    <input type="checkbox">徽菜
	<br/>
    <button id="all">全选</button>
    <button id="notall">全不选</button>
    <button id="noone">反选</button>

    <script>
        $("#all").click(function(){
           $(":checkbox").prop('checked',true)
        })
        $("#notall").click(function(){
           $(":checkbox").prop('checked',false)
        })        
        $("#noone").click(function(){
            //DOM元素.each() 相当于JS中的for循环
            $(":checkbox").each(function(){
                    //判断当前的这一个复选框的选中状态
                   $(this).prop('checked',!($(this).prop('checked')))
            })
        })
    </script>
```

