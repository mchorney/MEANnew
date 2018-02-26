var path = require('path');
// Require each controller you reference
var users = require('../controllers/users.js');

module.exports = function (app) {
    app.post('/api/create', function (req, res) {
        users.create(req, res);
    });

    app.get('/api/read', function (req, res) {
        users.read(req, res);
    });

    app.post('/api/update/:id', function (req, res) {
        users.update(req, res);
    });

    app.get('/api/player/', function (req, res) {
        users.getPlayers(req, res);
    });

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
};