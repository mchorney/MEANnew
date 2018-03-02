var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    create: function (req, res) {
        var player = new Player({
            name: req.body.name,
            perferredPosition: req.body.perferredPosition,
            game1: 'Undecided',
            game2: 'Undecided',
            game3: 'Undecided'
        });
        player.save(function (err, player) {
            if (err) {
                res.json(err);
            } else {
                res.json(player);
            }
        });
    },
    show: function (req, res) {
        Player.find({}, function (err, players) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(players);
            }
        })
    },
    delete: function (req, res) {
        Player.find({ _id: req.body.id }).remove(function (err, removed) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(removed);
                res.json(removed);
            }
        })
    },
    update: function (req, res) {
        console.log(req.body.id)
        console.log(req.body.newStatus)
        console.log(req.body.gameNum)
        function save(err, response) {
            if (err) {
                res.json(err);
            } else {
                Player.find({}, function (err, players) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.json(players);
                    }
                })
            }
        }
        if (req.body.gameNum == 1) {
            Player.update({ _id: req.body.id }, { $set: { 'game1': req.body.newStatus } }, save)
        }
        else if (req.body.gameNum == 2) {
            Player.update({ _id: req.body.id }, { $set: { 'game2': req.body.newStatus } }, save)
        }
        else if (req.body.gameNum == 3) {
            Player.update({ _id: req.body.id }, { $set: { 'game3': req.body.newStatus } }, save)
        }
    },
}