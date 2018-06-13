console.log("Starting app.js....!!!")

const fs = require('fs')
const os = require('os')
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs')


// console.log(os.userInfo().username);

// fs.appendFile('greetings.txt',`Hello ${os.userInfo().username} !, You are ${notes.age}`,(err)=> {
//     if(err) 
//         console.log("ERROR in appending file");
// })

// console.log(_.isString(notes.add(10,78)))
// let arr = [2,2,3,6,6,7]
// console.log(_.uniq(arr))
// console.log(_.isString(notes.addNote()))
// console.log(notes.add(2,8))

var action = process.argv[2]
// var data = process.argv[3]
// console.log("Process:" ,process.argv)
// console.log("Yargs ",yargs.argv)

if(action === 'add') {
    console.log("Adding new note")
    notes.addNote(yargs.argv.title, yargs.argv.body)
} 
else if(action === 'list') {
    let allNotes = notes.getAllNotes()
    console.log(allNotes)
    // allNotes.filter((index,note)=> {
    //     console.log(index+1 +" "+ note.title)
    //     console.log(" "+ note.body)        
    // })
}
