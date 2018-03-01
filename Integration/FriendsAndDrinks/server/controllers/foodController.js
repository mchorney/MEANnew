const mongoose = require('mongoose');
const Food = mongoose.model('Food');

module.exports = {
    create: function (req, res) {
        const sess = req.session;
        if (sess.id) {
            let newFood = new Food({
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity
            });
            newFood.save(function (newFoodErrors) {
                if (newFoodErrors) {
                    console.log('===ERROR SAVING FOOD===')
                    return res.json(newFoodErrors)
                } else {
                    console.log('===SUCCESSFULLY SAVED FOOD===')
                    return res.json(newFood)
                }
            })
        } else {
            console.log('===USER IS NOT SIGNED IN===')
            return res.json({ Error: 'User is not signed in' })
        }
    },
    read: function (req, res) {
        const sess = req.session;
        if (sess.id) {
            Food.findOne({ _id: req.body.id }, function (error, queryResponse) {
                if (error || queryResponse == null) {
                    console.log('===ERROR FINDING FOOD DOCUMENT===')
                    return res.json({ Error: error, Response: queryResponse })
                } else {
                    console.log('===FOUND FOOD DOCUMENT===')
                    return res.json(queryResponse)
                }
            })
        } else {
            console.log('===USER IS NOT SIGNED IN===')
            return res.json({ Error: 'User is not signed in' })
        }
    },
    update: function (req, res) {
        const sess = req.session;
        if (sess.id) {
            console.log('update req.body:', req.body)
            Food.findOneAndUpdate({ _id: req.body._id }, {
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity
            }, { new: true },
                function (error, response) {
                    if (error || response == null) {
                        console.log('===ERROR UPDATING FOOD DOCUMENT===')
                        console.log(error)
                        return res.json(error)
                    } else {
                        console.log('===SUCCESSFULLY UPDATED FOOD DOCUMENT===')
                        console.log(response)
                        return res.json(response)
                    }
                })
        } else {
            console.log('===USER IS NOT SIGNED IN===')
            return res.json({ Error: 'User is not signed in' })
        }
    },
    destroy: function (req, res) {
        const sess = req.session;
        if (sess.id) {
            Food.remove({ _id: req.body.id }, function (error) {
                if (error) {
                    console.log('===ERROR DELETING DOCUMENT===')
                    return res.json(error)
                } else {
                    console.log('===SUCCESSFULLY DELETED DOCUMENT===')
                    return res.json({ deleted: true })
                }
            })
        } else {
            console.log('===USER IS NOT SIGNED IN===')
            return res.json({ Error: 'User is not signed in' })
        }
    },
    readAll: function (req, res) {
        const sess = req.session;
        if (sess.id) {
            Food.find({}, function (error, queryResponse) {
                if (error) {
                    console.log('===ERROR FINDING ALL DOCUMENTS===')
                    return res.json(error)
                } else {
                    console.log('===FOUND ALL DOCUMENTS===')
                    console.log('queryresponse:', queryResponse)
                    return res.json(queryResponse)
                }
            })
        } else {
            console.log('===USER IS NOT SIGNED IN===')
            return res.json({ Error: 'User is not signed in' })
        }
    },
}