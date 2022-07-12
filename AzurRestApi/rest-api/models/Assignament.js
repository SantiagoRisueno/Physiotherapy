const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    idAppointment: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    customer: {
        required: true,
        type: String
    },physiotherapist: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('assignament', dataSchema);