var users = require('../controllers/users.js');
var bikes = require('../controllers/bikes.js');
module.exports = function (app) {

    // ROUTES//
    app.post('/register', function (req, res) {
        console.log('INSIDE ROUTES');
        users.register(req, res);
    }),
        app.post('/newBike', function (req, res) {
            console.log('INSIDE ROUTES NEW BIKE');
            bikes.createBike(req, res);
        }),
        app.post('/login', function (req, res) {
            console.log('INSIDE LOGIN ROUTES');
            users.login(req, res);
        }),
        app.post('/loggedUser', function (req, res) {
            console.log('ROUTES TO ALL USERS');
            users.loggedUser(req, res);
        }),
        app.get('/allBikes', function (req, res) {
            console.log('ROUTES TO ALL BIKES!!!');
            bikes.allBikes(req, res);
        }),
        app.get('/logout', function (req, res) {
            console.log('ROUTES TO LOGOUT');
            users.logout(req, res);
        }),
        app.get('/logBikes', function (req, res) {
            console.log('ROUTES TO LOG BIKES');
            bikes.logBikes(req, res);
        }),
        app.post('/edit', function (req, res) {
            console.log('ROUTES TO EDIT');
            bikes.edit(req, res);
        }),
        app.post('/delete', function (req, res) {
            console.log('ROUTES TO DELTE');
            bikes.delete(req, res);
        }),
        app.get('/bikeOfDay', function (req, res) {
            console.log('ROUTES TO BIKE OF DAY');
            bikes.bikeOfDay(req, res);
        })
};