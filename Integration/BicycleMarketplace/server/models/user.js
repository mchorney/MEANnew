var mongoose = require('mongoose')
var Schema = mongoose.Schema;

UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bikes: [{ type: Schema.Types.ObjectId, ref: 'Bike' }]
})

mongoose.model('User', UserSchema);