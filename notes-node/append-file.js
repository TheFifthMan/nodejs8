'use strict'
const fs = require('fs')

fs.appendFile("notes-node/add.txt","Hello World\n",err => {
    if (err) {
        console.log(err.message)
    }
})
fs.appendFile("notes-node/add.txt","Hello World2\n",err => {
    if (err) {
        console.log(err.message)
    }
})