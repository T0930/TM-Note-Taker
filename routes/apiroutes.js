const express = require('express');
const fs = require('fs');
const app = express();
let db = require("../db/db.json");

app.get('/notes', function (req, res){
    db = JSON.parse(fs.readFileSync('./db/db.json')) || []
    console.log('get', db)
    res.json(db)
})

app.post('/notes', function (req, res){
    let newNote = {
        id: Math.floor(Math.random() * 1000),
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

app.delete('/notes/:id', function (req, res){
    let deletenote = req.params.id
    let delNotes = db.filter(note => note.id != deletenote) 

    db = delNotes
    fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err){
        if(err) throw err;
    }) 
    console.log('delete', db)
    res.json(db)
})

module.exports = app;