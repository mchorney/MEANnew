var mongoose = require('mongoose')
var Schema = mongoose.Schema
var User = mongoose.model('User')

module.exports = {
    register: function (req, res) {
        console.log('INSIDE CONTROLLER');
        console.log('STUFF', req.body)
        var user = new User(req.body);
        user.save(function (err, userData) {
            if (err) {
                console.log('SAVE: womp womp');
            }
            else {
                req.session.name = req.body.firstName;
                req.session.user = req.body._id;
                req.session.email = req.body.email
                console.log('ayyyyyyye');
                res.json({ 'loggedUserId': req.session.user, 'loggedUserName': req.session.name, 'loggedUserEmail': req.session.email });
            }
        });
    },
    login: function (req, res) {
        console.log('INSIDE CONTROLLER');
        console.log('EMAIL', req.body.emailL);
        User.findOne({ email: req.body.emailL })
            .then((user) => {
                if (!user) {
                    console.log('COULD NOT FIND USER')
                    console.log('USER', user)
                    return res.json({ 'err': "That email doesn't exist here!" })
                }
                else if (user.password != req.body.passwordL) {
                    console.log('PASSWORD DID NOT MATCH')
                    return res.json({ 'err': "Your password is incorrect!" })
                }
                else {
                    console.log('CREATING SESSION')
                    req.session.name = user.firstName
                    req.session.user = user._id;
                    req.session.email = user.email;

                    res.json({ 'loggedUserId': req.session.user, 'loggedUserName': req.session.name, 'loggedUserEmail': req.session.email });
                }
            })
    },
    loggedUser: function (req, res) {
        console.log('IN CONTROLLER TO FIND LOGGED USER');
        res.json({ 'loggedUserId': req.session.user, 'loggedUserName': req.session.name, 'loggedUserEmail': req.session.email });
    },
    logout: function (req, res) {
        console.log('ING CONTROLLER FOR LOGOUT');
        req.session.destroy();
        console.log('YOU DESTROYED EVERYTHING! GAAAAAAAH! THE POWEEEEEEER!!!');
        res.json(true);
    }
}