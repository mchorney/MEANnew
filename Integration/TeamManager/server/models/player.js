var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: String,
    perferredPosition: String,
    game1: String,
    game2: String,
    game3: String,
}, { timestamps: true });

var player = mongoose.model('Player', PlayerSchema);