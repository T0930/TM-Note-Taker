
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
        title: req.params.title,
        text: req.params.text
    }
    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err){
        if(err) throw err;
    }) 
    console.log('post', db)
    res.json(db)
})