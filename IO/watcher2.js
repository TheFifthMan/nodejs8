import { error } from 'util';

'use strict'
const fs = require('fs')
const filename = process.argv[2]

fs.watch(filename,() => {
    console.log("file changed")
})
console.log('No file changed')