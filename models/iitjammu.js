const mongoose = require('mongoose')
const { Schema } = mongoose

const profSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    academicInterest: {
        type: { type: String },
        value: [String]
    }
})

module.exports = profSchema