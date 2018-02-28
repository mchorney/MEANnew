var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Bike = mongoose.model('Bike')

module.exports = {
    createBike: function (req, res) {
        console.log('INSIDE CONTROLLER CREATE BIKE');
        console.log('BIKE DATA', req.body)
        var bike = new Bike(req.body)
        console.log('SESSION USER ID', req.session.user)
        bike.user_ = req.session.user
        console.log('BIKE WITH USER ADDED', bike)
        console.log('ABOUT TO SAVE')
        bike.save(function (err, bikeData) {
            console.log('ATTEMPTING SAVE');
            if (err) {
                console.log('SAVE: womp womp');
            }
            else {
                console.log('ayyyyyyye');
                res.json({ bike: bikeData });
            }
        });
    },
    allBikes: function (req, res) {
        console.log('IN CONTROLLER TO FIND ALL BIKES');
        Bike.find({}, function (err, bikes) {
            console.log('FOUND BIKES')
            res.json({ 'bikeResults': bikes })
        });
    },
    logBikes: function (req, res) {
        console.log('IN CONTROLLER TO FIND LOGGED BIKES');
        Bike.find({ user_: req.session.user }, function (err, bikes) {
            if (err) {
                console.log('SAVE: womp womp');
            }
            else {
                console.log('FOUND BIKES')
                res.json({ 'bikeResults': bikes })
            }
        });
    },
    edit: function (req, res) {
        console.log('IN CONTROLLER TO EDIT');
        if (req.body.titleE != '') {
            console.log('ABOUT TO UPDATE TITLE')
            Bike.update({ _id: req.body.idE }, { $set: { title: req.body.titleE } }, function (err) {
                if (err) {
                    console.log('ERR')
                } else {
                    console.log('SUCCESS')
                }
            });
        }
        if (req.body.infoE != '') {
            console.log('ABOUT TO UPDATE INFO')
            Bike.update({ _id: req.body.idE }, { $set: { info: req.body.infoE } }, function (err) {
                if (err) {
                    console.log('ERR')
                } else {
                    console.log('SUCCESS')
                }
            });
        }
        if (req.body.priceE != '') {
            console.log('ABOUT TO UPDATE PRICE')
            Bike.update({ _id: req.body.idE }, { $set: { price: req.body.priceE } }, function (err) {
                if (err) {
                    console.log('ERR')
                } else {
                    console.log('SUCCESS')
                }
            });
        }
        if (req.body.locationE != '') {
            console.log('ABOUT TO UPDATE LOCATION')
            Bike.update({ _id: req.body.idE }, { $set: { location: req.body.locationE } }, function (err) {
                if (err) {
                    console.log('ERR')
                } else {
                    console.log('SUCCESS')
                }
            });
        }
        if (req.body.imageE != '') {
            console.log('ABOUT TO UPDATE IMAGE')
            Bike.update({ _id: req.body.idE }, { $set: { image: req.body.imageE } }, function (err) {
                if (err) {
                    console.log('ERR')
                } else {
                    console.log('SUCCESS')
                }
            });
        }
    },
    delete: function (req, res) {
        console.log('IN CONTROLLER TO DELETE');
        Bike.remove({ _id: req.body._id }, function (err) {
            if (err) {
                console.log('ERR')
            } else {
                console.log('SUCCESS')
            }
        });
    },
    bikeOfDay: function (req, res) {
        console.log('IN CONTROLLER BIKE OF DAY');
        Bike.find({})
            .then(bikes => {
                const index = Math.floor(Math.random() * bikes.length);
                req.session.bikeOfDay = bikes[index];
                res.json(bikes[index]);
            });
    }
}