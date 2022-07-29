const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    idHistory: {
        required: true,
        type: 'string'
    },
    idAssignament: {
        required: true,
        type: 'string'
    },
    treatment: {
        required: true,
        type: 'string'
    },
    pathology:{
        required: true,
        type: 'string'
    }
});

module.exports = mongoose.model('history', dataSchema);