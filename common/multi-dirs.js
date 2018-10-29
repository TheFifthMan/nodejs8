'use strict'
const path = require('path')
const fs = require('fs')
function mkdirs(folder,callback){
    fs.access(folder,fs.constants.F_OK, (err) => {
        if (err) {
           if (path.dirname(folder) != folder ){
                
           }
        }
    })
}

mkdirs('./aa/bb/cc')