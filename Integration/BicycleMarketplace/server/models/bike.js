var mongoose = require('mongoose')
var Schema = mongoose.Schema;

BikeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    info: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    user_: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

mongoose.model('Bike', BikeSchema);