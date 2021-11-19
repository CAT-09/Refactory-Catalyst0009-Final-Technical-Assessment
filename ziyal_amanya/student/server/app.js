//Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT // 1992;

//Middleware
app.use(cors()); //
app.use(express.json()); // because the backend is a restful api
app.use(express.urlencoded({ extended: true })); //
app.use(express.static('uploads')); // folder for holding all image uploads

//Database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
});

//routes prefix
//app.use('/api/artist', require('./routes/routes'));
app.use('/api/', require('./routes/routes'));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'));
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    });
}

//Start server
app.listen(port, function(){
    console.log(`App has started on port ${port}`);
})
