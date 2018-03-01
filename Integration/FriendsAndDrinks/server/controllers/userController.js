const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

module.exports = {
    create: function (req, res) {
        console.log('===INSIDE USER CREATE CONTROLLER===')
        if (req.body.password !== req.body.password_conf) {
            console.log('===Passwords do not match===')
            return res.json({ Error: 'Password and Password confirmation do not match' });
        }
        let newUser = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function (newUserErrors) {
            if (newUserErrors) {
                console.log('===ERRORS SAVING NEW USER===')
                console.log(newUserErrors)
                return res.json({ Error: 'User could not be saved' })
            } else {
                console.log('===SUCCESSFULLY SAVED USER===')
                req.session.id = newUser._id
                let response = {
                    _id: newUser._id,
                    first_name: newUser.first_name,
                    last_name: newUser.last_name,
                    email: newUser.email
                }
                return res.json(response)
            }
        });
    },
    login: function (req, res) {
        console.log('===INSIDE USER LOGIN CONTROLLER===')
        console.log('req.body:', req.body)
        User.findOne({ email: req.body.email }, function (errors, queryResponse) {
            console.log('QueryResponse:', queryResponse)
            if (errors || queryResponse == null) {
                console.log('===ERROR FINDING USER===')
                return res.json({ Error: 'Password or email does not match' })
            } else {
                console.log('===COMPARING PASSWORD===')
                console.log('req.body.password:', req.body.password)
                if (bcrypt.compareSync(req.body.password, queryResponse.password)) {
                    let response = {
                        _id: queryResponse._id,
                        first_name: queryResponse.first_name,
                        last_name: queryResponse.last_name,
                        email: queryResponse.email,
                        loggedIn: true
                    }
                    return res.json(response)
                } else {
                    console.log('===FAILED COMPARING PASSWORDS===')
                    return res.json({ Error: 'Password or email does not match', loggedIn: false })
                }
            }
        });
    },
    read: function (req, res) {
        console.log('===INSIDE USER READ CONTROLLER===')
        console.log('SESSION:', req.session.id)
        if (req.session.id) {
            User.findOne({ _id: req.body._id }, function (errors, queryResponse) {
                if (errors || queryResponse == null) {
                    console.log('===ERROR FINDING USER===')
                    return res.json({ Error: 'Error finding user' })
                } else {
                    let response = {
                        _id: queryResponse._id,
                        first_name: queryResponse.first_name,
                        last_name: queryResponse.last_name,
                        email: queryResponse.email
                    }
                    return res.json(response)
                }
            });
        } else {
            console.log('===USER NOT IN SESSION===')
            return res.json({ Error: 'User not in session' })
        }
    },
    update: function (req, res) {
        console.log('===INSIDE USER UPDATE CONTROLLER===')
        console.log('SESSION:', req.session.id)
        if (req.session.id) {
            User.findOneAndUpdate({ _id: req.body._id },
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email
                }
                , function (errors, queryResponse) {
                    if (errors || queryResponse == null) {
                        console.log('===ERROR UPDATING USER===')
                        return res.json({ Error: 'Error updating user' })
                    } else {
                        let response = {
                            _id: queryResponse._id,
                            first_name: queryResponse.first_name,
                            last_name: queryResponse.last_name,
                            email: queryResponse.email
                        }
                        return res.json(response)
                    }
                });
        } else {
            console.log('===USER NOT IN SESSION===')
            return res.json({ Error: 'User not in session' })
        }
    },
    destroy: function (req, res) {
        console.log('===INSIDE USER DESTROY CONTROLLER===')
        console.log('SESSION:', req.session.id)
        if (req.session.id) {
            User.remove({ _id: req.body._id }, function (errors) {
                if (errors) {
                    console.log('===ERROR DESTROYING USER===')
                    return res.json({ Error: 'Error removing user' })
                }
            });
        } else {
            console.log('===USER NOT IN SESSION===')
            return res.json({ Error: 'User not in session' })
        }
    },
    logout: function (req, res) {
        console.log('===INSIDE USER LOGOUT CONTROLLER===')
        console.log('SESSION:', req.session.id)
        if (req.session.id) {
            req.session.destroy();
        } else {
            console.log('===USER NOT IN SESSION===')
            return res.json({ Error: 'User not in session' })
        }
    }
}