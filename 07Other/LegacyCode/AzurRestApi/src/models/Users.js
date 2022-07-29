const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    idUsers: {
        required: false,
        type: 'string'
    },ci: {
        required: true,
        type: 'string'
    },
    name: {
        required: true,
        type: 'string'
    },
    age: {
        required: true,
        type: 'number'
    },
    genre:{
        required: true,
        type: 'string'
    },
    city:{
        required: true,
        type: 'string'
    },
    address: {
        required: true,
        type: 'string'
    },
    phone: {
        required: true,
        type: 'string'
    },
    email: {
        required: true,
        type: 'string'
    },
    password: {
        required: true,
        type: 'string'
    },
    type: {
        required: false,
        type: 'number'
    }
})



module.exports = mongoose.model('users', dataSchema)