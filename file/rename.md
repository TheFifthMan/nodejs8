# 重命名
rename除了了重命名一个文件外，还有剪切的功能
## 格式
```
fs.rename(oldPath, newPath, callback)
```
## 例子
```js
'use strict'
const fs = require('fs')

//文件剪切到了file文件夹里面
fs.rename('test','file\\test-rename',err => {
    if (err) {
        console.error(err)
    }
})
```