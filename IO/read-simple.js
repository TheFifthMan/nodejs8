'use strict'
// 读取文件
const fs = require('fs')
// 接收两个参数，如果成功读取文件，那么err就为null
fs.readFile('target.txt',(err,data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});