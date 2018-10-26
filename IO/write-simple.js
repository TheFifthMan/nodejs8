'use strict'
const fs = require('fs')
// 如果文件不存在就会创建一个文件
// 如果文件存在会覆盖文件
fs.writeFile('target.txt', 'Hello Wolrd', (err,data) => {
    if (err){
        throw err;
    }
    console.log('file saved')
})