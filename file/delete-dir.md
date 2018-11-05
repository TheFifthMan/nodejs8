# 删除文件夹
删除文件夹使用的是rmdir。但是只能删除空文件夹，如果文件夹里有内容便删除不了。这个不符合我们使用的实际场景，我们将在示例2研究一下，如何在删除有文件的文件夹

## 格式
```
fs.rmdir(path, callback)
fs.rmdirSync(path)
```

## 示例1
```js
'use strict'

const fs = require('fs');
fs.rmdir('test',(err) => {
    if (err) {
        console.error(err);
    }
})
```
## 示例2