'use strict'
const fs = require('fs')

fs.createReadStream(process.argv[2]).pipe(process.stdout);

// PS C:\project\nodejs8> node .\cat.js .\target.txt
// Hello Wolrd