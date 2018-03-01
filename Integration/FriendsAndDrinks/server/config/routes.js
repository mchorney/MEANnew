const UserController = require('../controllers/userController');
const FoodController = require('../controllers/foodController');

module.exports = function (app) {
    app.post('/RegisterUser', function (req, res) {
        UserController.create(req, res);
    });
    app.post('/LoginUser', function (req, res) {
        UserController.login(req, res);
    });
    app.post('/ReadUser', function (req, res) {
        UserController.read(req, res);
    });
    app.post('/UpdateUser', function (req, res) {
        UserController.update(req, res);
    });
    app.post('/DestroyUser', function (req, res) {
        UserController.destroy(req, res);
    });
    app.get('/LogoutUser', function (req, res) {
        UserController.logout(req, res);
    });
    app.post('/CreateFood', function (req, res) {
        FoodController.create(req, res);
    });
    app.post('/ReadFood', function (req, res) {
        FoodController.read(req, res);
    });
    app.post('/UpdateFood', function (req, res) {
        FoodController.update(req, res);
    });
    app.post('/DestroyFood', function (req, res) {
        FoodController.destroy(req, res);
    });
    app.get('/AllFood', function (req, res) {
        FoodController.readAll(req, res);
    });
}