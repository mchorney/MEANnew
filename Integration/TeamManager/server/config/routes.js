var mongoose = require('mongoose');
var players = require('../controllers/players.js');
var path = require('path');

module.exports = function (app) {

    app.get('/api/show', function (req, res) {
        players.show(req, res);
    })

    app.post('/api/create', function (req, res) {
        players.create(req, res);
    })

    app.post('/api/delete', function (req, res) {
        players.delete(req, res);
    })

    app.post('/api/update', function (req, res) {
        players.update(req, res);
    })

    app.all('*', function (req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}