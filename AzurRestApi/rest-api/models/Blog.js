const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    idBlog: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    },
    caterogies: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('blog', dataSchema);