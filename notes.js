console.log("Starting notes.js...!!")
// module.exports.age = 23
// console.log(module);
const fs = require('fs')

addNote = (title) => {
    // console.log("New Note added")
        return `New Note ${title} Added`
}

add = (a,b) => {
    return a+b 
}

module.exports = {
    addNote : addNote,
    add: add
}

