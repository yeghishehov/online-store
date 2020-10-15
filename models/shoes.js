const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, unique: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    images: [String],
})

module.exports = model('Shoes', schema)