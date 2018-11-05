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