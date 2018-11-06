# 复制文件 
如果目标文件存在，就会被覆盖，在复制过程中，出现失败，也会移除复制的文件
```
fs.copyFile(src, dest[, flags], callback)

flag: fs.constants.COPYFILE_EXCL 只支持这个参数，如果目标文件存在，就抛错。
```
## 示例
```js
'use strict'
const fs = require('fs')

fs.copyFile('README.md','file\\des.txt',err => {
    if (err) {
        console.error(err);
    }
})
```