# 确定文件夹是否存在
可以使用access来确定，access可以用来确认文件或者文件夹，是否存在，可读可写可执行rwx.
## 格式
```js
fs.access(path[, mode], callback)

path <string> | <Buffer> | <URL>
mode <integer> Default: fs.constants.F_OK
callback <Function>
    err <Error>
```
## 代码示例
```js
'use strict'
const fs = require('fs')
fs.access('common',fs.constants.F_OK | fs.constants.W_OK,err => {
    if (err) {
        console.error(err);
    }else{
        console.log('exists')
    }
})
```