'use strict'
const fs = require('fs')
fs.access('common',fs.constants.F_OK | fs.constants.W_OK,err => {
    if (err) {
        console.error(err);
    }else{
        console.log('exists')
    }
})