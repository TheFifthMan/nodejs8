'use strict'
const fs = require('fs')
fs.rename('test','file\\test-rename',err => {
    if (err) {
        console.error(err)
    }
})