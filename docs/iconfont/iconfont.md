### icon-font
图标字体的自定义方法
1. font class
   ```

   <i className="mi-icon mifont mi-location"></i> 
   ```

2. symbol font
  + 引入
  ```bash
    <script src="iconfont.js">
  ```
  + 调用
  ```
    <svg className="icon" aria-hidden="true">
      <use href="#icon-ppt"></use>
    </svg>
  ```