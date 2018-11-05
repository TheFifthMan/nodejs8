# 追加内容到文件
有时候，我们希望追加内容到文件中，而不希望覆盖原来内容。这一共有3种方式,
## 示例1
```js
'use strict'

const fs = require('fs')

fs.open('input.txt','a+',(err,fd) => {
    if (err) {
        console.error(err);
    }
    fs.writeFile(fd,'\nHello 我是追加的内容',(err) => {
        if (err) {
            console.error(err);
        }
    })
})
```
## 示例2 [无特殊需求，推荐使用]
```js
// 追加写入内容
'use strict'
const fs = require('fs')
fs.appendFile('input.txt',"\nhello world\n",(err) => {
    if (err) {
        console.error(err);
    }
})
```

## 示例3
```js
'use strict'
const fs = require('fs')
fs.appendFileSync('input.txt','\nHelloWorld\n',(err) =>{
    if (err) {
        console.error(err);
    }
})
```