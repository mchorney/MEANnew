var path = require('path');
var notes = require('../controllers/notes.js');

module.exports = function (app) {
    app.post('/create', function (req, res) {
        notes.create(req, res);
    });
    app.get('/read', function (req, res) {
        notes.read(req, res);
    });
    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
};