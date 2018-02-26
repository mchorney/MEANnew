var mongoose = require('mongoose');
// create a variable for the model you are using 
var User = mongoose.model('User');

module.exports = {
    // Example of CRUD operations
    create: function (req, res) {
        var user = new User({
            user_name: req.body.player.user_name,
            avatar_url: req.body.player.avatar_url,
            score: req.body.player.score,
        });
        user.save(function (err, user) {
            if (err) {
                res.json(err);
            } else {
                if (req.body.position == 1) {
                    req.session.player1 = user;
                    console.log('player1 is' + req.session.player1);
                } else {
                    req.session.player2 = user;
                }
                res.json(user);
            }
        });
    },

    read: function (req, res) {
        User.find({}).sort({ score: -1 }).exec(function (err, users) {
            if (err) {
                res.json(err);
            } else {
                res.json(users);
            }
        });
    },

    update: function (req, res) {
        User.findOne({ _id: req.params.id }, function (err, user) {
            if (err) {
                res.json(err);
            } else {
                user.user_name = req.body.user_name;
                user.avatar_url = req.body.avatar_url;
                user.score = req.body.score;
                user.save(function (err) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(user);
                    }
                });
            }
        });
    },

    getPlayers: function (req, res) {
        let player_info = {
            'player1': req.session.player1,
            'player2': req.session.player2
        };
        console.log(player_info);
        res.json(player_info);
    }

};