### 正则

1.数值千分位格式化
  + 后行断言
  ```
  /(?<!\.\d+)(?=\B(\d{3})+\b)/g
  ```
  + 后行否定断言
  ```
  /(?<!\.\d+)(?=\B(\d{3})+\b)/g
  ```