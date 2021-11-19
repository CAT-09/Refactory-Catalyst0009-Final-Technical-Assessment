const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema({
    surname: {
        type: String,
        trim: true,
        required: true,
    },
    givenname: {
        type: String,
        trim: true,
    },

    tittle: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    DOB: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },

    Nationality: {
        type: String,
        trim: true,
    },


    photoc: {
        type: String,

    },
    place: {
        type: String,
        trim: true,
    },
});


module.exports = mongoose.model('students', studentSchema);