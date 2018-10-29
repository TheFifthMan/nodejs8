'use strict'
// 判断文件状态
//isFile,isDirectory
const fs = require('fs');
fs.stat('input.txt', (err,stats) => {
    console.log(stats.isFile());
})