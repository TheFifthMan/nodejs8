// 同步读取文件
'use strict'

const fs = require('fs')
let data = fs.readFileSync('input.txt')
console.log(data.toString())