const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    apop: {
        type: Number,
        required: true
    },
    trap: {
        type: Boolean,
        required: true
    },
    resources: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    upgrades: {
        type: Array,
        required: true
    },
    areas: {
        type: Array,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    allocated: {
        type: Array,
        required: true
    },
    lastSaved: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('data', dataSchema);