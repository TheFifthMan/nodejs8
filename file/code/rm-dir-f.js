'use strict'
const fs = require('fs')
const p = require('path')
function rmdirs(path,callback){
    fs.access(path,fs.constants.F_OK,(err) => {
        if (err) {
            console.error('the file not exists => ',err)
        }else{
            fs.readdir(path,(err,files) => {
                if (files.length === 0) {
                    return 
                }
                files.forEach(file => {
                    let cur_path = p.join(p.join(process.cwd(),path),file)
                    fs.stat(cur_path,(err,stats) => {
                        if (stats.isDirectory()) {
                            rmdirs(cur_path,(cur_path) => {
                                fs.rmdir(cur_path,err => {
                                    throw err
                                })
                            })
                        }else if (stats.isFile()) {
                            fs.unlink(cur_path,err => {
                                console.error('the unlinks error => ',err)
                            })
                        }
                    })
                })
                
                // 异步无法处理到这里。因为前面那个递归还没处理，所以这里会抛错
                // 这里可以看到nodejs的缺点，就是回调地狱
                // fs.rmdir(path,err=>{
                //     console.error('the last rmdir error =>',err);
                // })
            })
            //callback(path)
        }
    })    
}
rmdirs('wheather',() => {})