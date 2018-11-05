# 写入文件
写入文件有两种方式，同步和异步
# 异步
## 格式
```js
fs.writeFile(file, data[, options], callback)

file <string> | <Buffer> | <URL> | <integer> filename or file descriptor

data <string> | <Buffer> | <Uint8Array>

options <Object> | <string>
    encoding <string> | <null> Default: 'utf8'
    mode <integer> Default: 0o666
    flag <string> Default: 'w'

callback <Function>
    err <Error>

```
## 代码示例
```js
// 创建input.txt 文件，并且异步写入内容
'use strict'

const fs = require('fs')
let content = "Hello World 我是例子" 
fs.writeFile('input.txt',content,(err) => {
    if (err) {
        throw err;
    }
    console.log("文件内容写入成功")
})
```
# 同步写入内容到文件
## 格式
```js
fs.writeFileSync(file, data[, options])

```
## 代码示例
```js
// 创建文件，同步写入内容
// 创建文件，同步写入内容
'use strict'
const fs = require('fs')
fs.writeFileSync("input.txt","Hello 我是同步写入的内容")
```