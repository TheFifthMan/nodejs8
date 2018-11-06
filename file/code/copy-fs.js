'use strict'
const fs = require('fs')

fs.copyFile('README.md','file\\des.txt',err => {
    if (err) {
        console.error(err);
    }
})