//读取文件
const fs = require('fs')
fs.readFile('input.txt',(err,data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
})