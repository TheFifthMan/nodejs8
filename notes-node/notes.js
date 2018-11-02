console.log('starting notes.js')
module.exports = {
    "age":25,
    "addNotes": () => {
        console.log('add notes')
        return "Hello Notes"
    },
    "add": (a,b) => {
        return a+b+1
    }
}