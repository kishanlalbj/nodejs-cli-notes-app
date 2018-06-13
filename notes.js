console.log("Starting notes.js...!!")
// module.exports.age = 23
// console.log(module);
const fs = require('fs')

addNote = (title,body) => {

    var notes = []
    var note = {
        title,body
    }

    try {
        var notesString = fs.readFileSync('notes/notes-data.json')
        notes = JSON.parse(notesString)
    }catch (e) {
        console.log("Notes not found..")    
    }
    
    var duplicateNotes = notes.filter((note)=> note.title === title)
    console.log("Duplicate Notes",duplicateNotes)
    if(duplicateNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes/notes-data.json',JSON.stringify(notes))    
    } else {
        console.log("Note already exists")
    }
    
}

getAllNotes = () => {
    try{

        var allNotes = fs.readFileSync('./notes/notes-data.json')
        return JSON.parse(allNotes)

    } catch(e) {

    }
}

add = (a,b) => {
    return a+b 
}

module.exports = {
    addNote : addNote,
    add: add,
    getAllNotes: getAllNotes
}

