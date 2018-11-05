'use strict'

const fs = require('fs')
fs.appendFileSync('input.txt','\nHelloWorld\n',(err) =>{
    if (err) {
        console.error(err);
    }
})