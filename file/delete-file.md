# 删除文件
```
fs.unlink(path, callback) 
```

## 示例
```js
'use strict'
const fs = require('fs')
fs.unlink('filedes.txt',err => {
    if (err) {
        console.error(err)
    }
})
```
