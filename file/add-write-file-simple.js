// 追加写入内容
'use strict'
const fs = require('fs')
fs.open('input.txt','a+',(err, fd) => {
    if (err) {
        return console.error(err);
    }
    fs.writeFile(fd,"这个是追加的内容", (err) => {
        if (err) {
            return console.error(err);
        }
    })
})
