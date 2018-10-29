//找出当前文件夹下的所有js文件
const fs = require('fs');
const p = require('path');
function listFiles(path){
    fs.readdir(path,(err,files) => {
        files.forEach((filename) => {
            let dir = p.join(path,filename);
            fs.stat(dir,(err,stats) => {
                if (stats.isDirectory()) {
                    listFiles(dir)
                }else if (stats.isFile() ){
                    console.log(p.basename(dir))
                    
                }
            })
        })
    })
}

listFiles(process.cwd())