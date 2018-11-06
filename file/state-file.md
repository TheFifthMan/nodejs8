# 文件属性
```
fs.stat(path, callback)#
path <string> | <Buffer> | <URL>
callback <Function>
    err <Error>
    stats <fs.Stats>
```
## 示例
```js
'use strict'
// 判断文件状态
//isFile,isDirectory
const fs = require('fs');
fs.stat('input.txt', (err,stats) => {
    console.log(stats.isFile());
})
```