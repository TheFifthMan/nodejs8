const fs = require('fs')
const yargs = require('yargs')
const note = require('./note.js')

command = yargs.argv
if (process.argv[2] === 'list' ){
    console.log('list all article')
}else if (process.argv[2] === "add"){
    console.log("add article------------------")
    note.addNotes(command.title,command.body)
}else if (process.argv[2] === "delete"){
    console.log("delete article")
}else {
    console.log("No reconization")
} 