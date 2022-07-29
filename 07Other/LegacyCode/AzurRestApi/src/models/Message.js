const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    idMessage: {
        required: true,
        type: 'string'
    },
    name: {
        required: true,
        type: 'string'
    },
    email: {
        required: true,
        type: 'string'
    },
    subject:{
        required: true,
        type: 'string'
    },
    message: {
        required: true,
        type: 'string'
    }
});

module.exports = mongoose.model('message', dataSchema);