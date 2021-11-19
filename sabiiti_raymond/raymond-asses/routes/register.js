const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const students = require('../models/register');


const router = express.Router()

//artiast registration page route
router.get('/register', (req, res) => {
    res.render('index');
});

//handle the storage of the path of the image and sending it in the folder that was specified 
//in the deatination path
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage })

//handling data from the form add sending it the aristdb collection
router.post('/register', upload.single('photo'), async(req, res) => {
    console.log(req.body);
    try {
        const Studentdata = new students(req.body);

        Studentdata.photo = req.file.path
        await Studentdata.save();
        await students.register(user, req.body.password, (err) => {
            if (err) {
                throw err;
            }

            res.redirect('/register');
        });
    } catch (err) {
        res.status(400).send('something is not working');
        console.log(err);
    }
});

module.exports = router;