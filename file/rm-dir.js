'use strict'

const fs = require('fs');
fs.rmdir('test',(err) => {
    if (err) {
        console.error(err);
    }
})