const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    idBlog: {
        required: true,
        type: 'string'
    },
    author: {
        required: true,
        type: 'string'
    },
    date: {
        required: true,
        type: 'string'
    },
    title: {
        required: true,
        type: 'string'
    },
    description: {
        required: true,
        type: 'string'
    },
    img: {
        required: true,
        type: 'string'
    },
    categories: {
        required: true,
        type: 'string'
    }
});

module.exports = mongoose.model('blog', dataSchema);