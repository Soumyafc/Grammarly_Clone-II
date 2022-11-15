const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    document: {
        type: String,
        required: true
    }
})