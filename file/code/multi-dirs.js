'use strict'
const path = require('path')
const fs = require('fs')
function mkdirs(folder,callback){
    fs.access(folder,fs.constants.F_OK, (err) => {
        // err 为文件夹不存在
       if (err) {
           mkdirs(path.dirname(folder),() => {
               fs.mkdir(folder,callback)
           })
       }else{
           callback()
       }
    })
}

mkdirs(path.join(process.cwd(),'./aa/bb/cc'),() => {})