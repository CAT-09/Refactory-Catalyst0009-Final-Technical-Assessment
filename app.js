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

//start server
app.listen(port, () => console.log(`Server running at ${port}`));