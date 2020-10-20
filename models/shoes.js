const {Schema, model} = require('mongoose')

const schema = new Schema({
    shoesName: {type: String, required: true, unique: false},
    type: {type: String, required: true},
    collectionName: {type: String, required: true},
    price: {type: String, required: true},
    sizes: [String],
    description: {type: String, required: true},
    color: {type: String, required: true},
    imagesSrc: [String],
})

module.exports = model('Shoes', schema)