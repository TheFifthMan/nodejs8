'use strict'
const fs = require('fs');
const asyncReadFile = async function () {
    const f1 = await fs.readFile('README.md');
    console.log(f1.toString());
};
asyncReadFile()