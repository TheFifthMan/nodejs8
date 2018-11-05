'use strict'
//删除文件
const fs = require('fs');
fs.unlink('input.txt', (err) => {
    if (err) {
        console.error(err);
    }
})