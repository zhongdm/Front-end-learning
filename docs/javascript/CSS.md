### shadow
+ text-shadow
+ box-shadow
+ drop-shadow

### 自定义属性
1. 在根节点下定义变量，比如：
```
:root {
  --color_text: red;
}

div {
  color: var(--color_text);
  color: var(--color_text, black); // black是默认值
}

// @support指令来检查浏览器是否支持自定义属性
@supports((--foo:bar)) {
  body {
    color: red;
  }
}
```

### 不同分辨率
1. window.devicePixelRatio