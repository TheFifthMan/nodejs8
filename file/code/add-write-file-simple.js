// 追加写入内容
'use strict'
const fs = require('fs')
fs.appendFile('input.txt',"\nhello world\n",(err) => {
    if (err) {
        console.error(err);
    }
})