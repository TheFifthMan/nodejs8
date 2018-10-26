const fs = require('fs');
fs.watch('target.txt',() => {
    console.log('File Changed')
})
console.log("No Changed")