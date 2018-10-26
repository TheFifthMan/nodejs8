'use strict'
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];
fs.watch(filename,() => {
    const dir = spawn('dir  ',[filename]);
    dir.stdout.pipe(process.stdout);
})
console.log(`No file ${filename} for changes`);