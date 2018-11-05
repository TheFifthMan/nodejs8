# 创建文件夹
这个很常见，就是mkdir。但是nodejs没有提供构建多层文件夹的API，需要我们自己去写

## 格式
```js
// 异步
fs.mkdir(path[, mode], callback)
// 同步
fs.mkdirSync(path[, mode])

path <string> | <Buffer> | <URL>
mode <integer> Default: 0o777
callback <Function>
    err <Error>
```
## 示例
```js
'use strict'

const fs = require('fs');
fs.mkdir('test', (err) => {
    if (err) {
        console.log(err);
    }
})
```
## 如何创建多级文件夹
```js
'use strict'
const path = require('path')
const fs = require('fs')
function mkdirs(folder,callback){
    fs.access(folder,fs.constants.F_OK, (err) => {
        // err 为文件夹不存在
       if (err) {
           mkdirs(path.dirname(folder),() => {
               fs.mkdir(folder,callback)
           })
       }else{
           callback()
       }
    })
}
mkdirs(path.join(process.cwd(),'./aa/bb/cc'),() => {})
```
自己写的一个函数，缺点就是没有任何的错误输出。
