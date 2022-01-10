
const fs = require('fs');
const app = require('express').Router()
const db = require("../db/db.json");

app.get('/api/notes', function (req, res){
    db = JSON.parse(fs.readFileSync('./db/db.json')) || []
    console.log('get', db)
    res.json(db)
})

app.post('/api/notes', function (req, res){
    let newNote = {
        id: Math.floor(math.random() * 1000),
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err){
        if(err) throw err;
    }) 
    console.log('post', db)
    res.json(db)
})

app.delete('/api/notes/:id', function (req, res){
    let deletenote = req.params.id
    let newNotes = db.filter(note => note.id != deletenote) 

    // for (let i = 0; i < db.length: i++) {
    //     if (db[i].id != deletenote){
    //         newNotes.push(db[i])
    //     }
    // }

    db = newNotes
    fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err){
        if(err) throw err;
    }) 
    console.log('delete', db)
    res.json(db)
})

module.exports = app;