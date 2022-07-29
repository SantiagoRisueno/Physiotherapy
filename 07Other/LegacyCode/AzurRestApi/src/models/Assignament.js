const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    idAppointment: {
        required: true,
        type: 'string'
    },
    date: {
        required: true,
        type: 'string'
    },
    time: {
        required: true,
        type: 'string'
    },
    pathology:{
        required: true,
        type: 'string'
    },
    customer: {
        required: true,
        type: 'string'
    },
    physiotherapist: {
        required: true,
        type: 'string'
    }
});

module.exports = mongoose.model('assignament', dataSchema);