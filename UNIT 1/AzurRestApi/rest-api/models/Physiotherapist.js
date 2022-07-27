const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    speciality:{
        required:false,
        type:String
    },
    ci: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    cellphone: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    admin: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('physiotherapist', dataSchema)