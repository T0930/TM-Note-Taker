const fs = require('fs');
const express = require('express');
const path = require('path');
const apiRoute = require('./routes/apiroutes')
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use(require('./routes/htmlroutes'));



app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);