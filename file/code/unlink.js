'use strict'
const fs = require('fs')
fs.unlink('filedes.txt',err => {
    if (err) {
        console.error(err)
    }
})