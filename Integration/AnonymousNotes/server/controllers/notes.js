var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    create: function (req, res) {
        var note = new Note({
            content: req.body.content
        });
        note.save(function (err) {
            if (err) {
                res.json(err);
            } else {
                res.json(note);
            }
        });
    },

    read: function (req, res) {
        Note.find({}).sort({ createdAt: -1 }).exec(function (err, notes) {
            if (err) {
                res.json(err);
            } else {
                res.json(notes);
            }
        });
    }
};