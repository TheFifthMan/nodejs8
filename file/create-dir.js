'use strict'

const fs = require('fs');
fs.mkdir('test', (err) => {
    if (err) {
        console.log(err);
    }
})