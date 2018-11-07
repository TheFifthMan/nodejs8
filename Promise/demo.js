const fs = require('fs')
const ReadFile = () => {
    return new Promise((resolve,reject) => {
        fs.readFile('README.md',(err,data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

const asyncReadFile = async () => {
    let f = await ReadFile();
    console.log(f.toString());  
}

asyncReadFile()