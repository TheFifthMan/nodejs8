// fs.open(path, flags[, mode], callback)

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