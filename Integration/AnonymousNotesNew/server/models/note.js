var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 3
    },
}, { timestamps: true });

var Note = mongoose.model('Note', NoteSchema)