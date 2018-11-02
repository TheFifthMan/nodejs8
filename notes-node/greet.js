'use strict'
const fs = require('fs')
const os = require('os')
const user = os.userInfo()
const notes = require('./notes.js')
let res = notes.addNotes()
let age = notes.age
console.log(age)
console.log(res)
//console.log(module)
// fs.appendFile('greet.txt',`Hello ${user.username}`, err => {
//     if (err) {
//         console.error(err);
//     }
// })
let sum = notes.add(9,-2)
console.log(sum)

const _ = require('lodash')
console.log(_.isString("Hello"))
console.log(_.isString(1))  
console.log(_.uniq(["Gary",1,2,3,4,5,6,"gary","Gary"]))