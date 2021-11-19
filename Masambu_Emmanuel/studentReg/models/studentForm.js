const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportmongoose = require('passport-local-mongoose');

const studentSchema = new Schema({
    txtsurname: {
        type: String,
        required: true, 
        trim: true,
    },
    txtgiven: {
        type: String,
        required: true, 
        trim: true,
    },
    txtTitle: {
        type: String,
        trim: true,
    },
    profilepic: {
        type: String,
        required: true, 
        trim: true,
    },
    txtSex: {
        type: String,
        required: true, 
        trim:true,
    },
    txtDoB: {
        type: Date,
        required: true, 
        trim:true,
    },
    txtCountry: {
        type: String,
        required: true, 
        trim:true,
    },
    txtresidence: {
        type: String,
        required: true, 
        trim:true,
    },
    txtnationality: {
        type: String,
        required: true, 
        trim:true,
    },
});

// Creating a mongoose model with the preferred name of my collection and the musicartistSchema created above
const studentModel = mongoose.model("Students", studentSchema)
module.exports = studentModel