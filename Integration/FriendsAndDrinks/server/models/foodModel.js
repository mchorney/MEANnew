const mongoose = require('mongoose');

var FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        trime: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })

mongoose.model('Food', FoodSchema);