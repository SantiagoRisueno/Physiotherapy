const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    ci: {
        required: true,
        type: String
    },
    name:{
        required:false,
        type:String
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
    pathology: {
        required: true,
        type: String
    },
    treatingPhysician: {
        required: true,
        type: String
    },
    background: {
        required: true,
        type: String
    },
    admin: {
        required: true,
        type: String
    }
})



module.exports = mongoose.model('users', dataSchema)