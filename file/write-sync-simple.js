// 创建文件，同步写入内容
const fs = require('fs')
fs.writeFileSync("input.txt","Hello 我是同步写入的内容",(err) => {
    if (err) {
        throw err;
    }
    console.log("写入成功")
})