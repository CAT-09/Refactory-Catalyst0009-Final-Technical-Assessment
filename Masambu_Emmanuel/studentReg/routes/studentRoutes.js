const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const StudentsReg = require("../models/studentForm");

const router = express.Router();

router.get("./Masambu_Emmanuel/studentReg/views/studentForm", (req, res) => {
    res.render("../studentForm");
  });

// Instatiation of storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/img");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage });

router.post(
    './Masambu_Emmanuel/studentReg/views/studentForm', 
    upload.single('profilepic'), 
    
    async (req, res) => {
  console.log(req.body);
  try {
    const studentsReg = new StudentsReg(req.body);
    studentsReg.profilepic = req.file.path;
    console.log(studentReg);
    console.log('This is the image you want to upload', req.file);
    await StudentsReg.register(studentsReg, req.body, (err) => {
      if (err) {
        throw err;
        console.log('Data has not been posted', err);
      }
      res.redirect('../studentinfo/studentForm'); 
    });
  } catch (err) {
    res.status(400).send('Sorry! Data was not sent to DB');
    console.log(err); 
  }
});

module.exports = router;