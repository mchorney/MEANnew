var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    avatar_url: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

mongoose.model('User', UserSchema)