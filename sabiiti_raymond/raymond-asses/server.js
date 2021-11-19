const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const reg = require('./routes/register')
const Data = require('./models/register')

const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false
});

require('dotenv').config();
const app = express();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static(__dirname + '/public/images'))
    //configeration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use('/student', reg)





app.get('*', (req, res) => {
    res.status(404).send('page not found');
});
//server
app.listen(3040, function() {
    console.log('listening on 3040');
});