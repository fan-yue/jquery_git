## jQuery hide() 和 show()

通过 jQuery，您可以使用 hide() 和 show() 方法来**隐藏和显示** HTML 元素：

```
    <button id="hide">隐藏</button>
    <button id="show">显示</button>
    <div class="a">
        123
    </div>
    <script>
        $("#hide").click(function(){
        		//隐藏
            $(".a").hide();
        });
 
        $("#show").click(function(){
        		//显示
            $(".a").show();
        });
    </script>
```

`语法`

```
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
```

可选的 `speed` 参数规定隐藏/显示的速度，可以取以下值："`slow`"、"fast" 或毫秒。

可选的 `callback` 参数是隐藏或显示完成后所执行的函数名称。

下面的例子演示了带有 `speed` 参数的 `hide()` 方法：

```
    <button id="hide">隐藏</button>
    <button id="show">显示</button>
    <div class="a">
        123
    </div>
    <script>
        $("#hide").click(function(){
            $(".a").hide(1000);
        });
 
        $("#show").click(function(){
            $(".a").show(1000);
        });
    </script>
```

下面的例子演示了带有 `speed` 参数的 `hide()` 方法，并使用**回调函数**

```
    <button id="hide">隐藏</button>
    <button id="show">显示</button>
    <div class="a">
        123
    </div>
    <script>
        $("#hide").click(function(){
            $(".a").hide(1000,function(){
                alert('隐藏已经完成了');
            });
        });
 
        $("#show").click(function(){
            $(".a").show(1000);
        });
    </script>
```



## jQuery toggle()

可以使用 `toggle()` 方法来切换 `hide()` 和 `show()` 方法。

显示被隐藏的元素，并隐藏已显示的元素

`语法`

```
$(selector).toggle(speed,callback);
```

`例子`

```
    <button id="btn">集成按钮，可以显示也可以隐藏</button>
    <div class="a">
        123
    </div>
    <script>
        $('#btn').click(function(){
            $('.a').toggle(1000,function(){
                console.log('隐藏或者显示');
            })
        })
    </script>
```

​	

## jQuery 效果 - 淡入淡出

### jQuery fadeIn() 方法	淡入已隐藏的元素

`语法`

```
$(selector).fadeIn(speed,callback*);
```

可选的 `speed` 参数规定效果的时长。它可以取以下值："`slow`"、"`fast`" 或毫秒。.

可选的 `callback` 参数是 `fading` 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 `fadeIn()` 方法：

```
    <button id="btn">按钮</button>
    <div id="div1" style="display:none;">div1</div>
    <div id="div2" style="display:none;">div2</div>
    <div id="div3" style="display:none;">div3</div>
    <script>
        $('#btn').click(function(){
            $("#div1").fadeIn();
            $("#div2").fadeIn("slow");
            $("#div3").fadeIn(3000);
        })
    </script>
```



### jQuery fadeOut() 方法	淡出可见元素

`语法`

```
$(selector).fadeOut(speed,callback);
```

可选的 `speed` 参数规定效果的时长。它可以取以下值："`slow`"、"fast" 或毫秒。

可选的 callback 参数是 `fading` 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 `fadeOut()` 方法：

```
    <button id="btn">按钮</button>
    <div id="div1">div1</div>
    <div id="div2">div2</div>
    <div id="div3">div3</div>
    <script>
        $('#btn').click(function(){
            $("#div1").fadeOut();
            $("#div2").fadeOut("slow");
            $("#div3").fadeOut(3000);
        })
    </script>
```



### jQuery fadeToggle() 方法

`jQuery fadeToggle()` 方法可以在 `fadeIn()` 与 `fadeOut()` 方法之间进行切换。

如果元素已淡出，则 `fadeToggle()` 会向元素添加淡入效果。

如果元素已淡入，则 `fadeToggle()` 会向元素添加淡出效果。

`语法`

```
$(selector).fadeToggle(speed,callback);
```

可选的 `speed` 参数规定效果的时长。它可以取以下值："`slow`"、"`fast`" 或`毫秒`。

可选的 `callback` 参数是 `fading` 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 `fadeToggle()` 方法：

```
    <button id="btn">按钮</button>
    <div id="div1">div1</div>
    <div id="div2">div2</div>
    <div id="div3">div3</div>
    <script>
        $('#btn').click(function(){
            $("#div1").fadeToggle();
            $("#div2").fadeToggle("slow");
            $("#div3").fadeToggle(3000);
        })
    </script>
```



### jQuery fadeTo() 方法   

jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。

`语法`

```
$(selector).fadeTo(speed,opacity,callback);
```

必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。

可选的 callback 参数是该函数完成后所执行的函数名称。

下面的例子演示了带有不同参数的 fadeTo() 方法：

```
    <button id="btn">按钮</button>
    <div id="div1">div1</div>
    <div id="div2">div2</div>
    <div id="div3">div3</div>
    <script>
        $('#btn').click(function(){
            $("#div1").fadeTo("slow",0.15);
            $("#div2").fadeTo("slow",0.4);
            $("#div3").fadeTo("slow",0.7);
        })
    </script>
```

