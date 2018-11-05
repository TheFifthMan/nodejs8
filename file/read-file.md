# 读取文件
读取文件有两种方式，同步和异步
# 异步
## 格式
```js
fs.readFile(path[, options], callback)
path <string> | <Buffer> | <URL> | <integer> filename or file descriptor

options <Object> | <string>
    encoding <string> | <null> Default: null
    flag <string> Default: 'r'

callback <Function>
    err <Error>
    data <string> | <Buffer>
```
## 示例
```js
//读取文件
'use strict'
const fs = require('fs')
fs.readFile('input.txt',(err,data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
})
```
# 同步
## 格式
```js
fs.readFileSync(path[, options])

path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
options <Object> | <string>
    encoding <string> | <null> Default: null
    flag <string> Default: 'r'
```
## 示例
```js
// 同步读取文件
'use strict'
const fs = require('fs')
let data = fs.readFileSync('input.txt')
console.log(data.toString())
```
