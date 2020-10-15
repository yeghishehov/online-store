const {Schema, model} = require('mongoose')

const media = new Schema({
    color: {type: String, required: true},
    imagesSrc: [String]
})
const schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: String, required: true},
    sizes: [String],
    description: {type: String, required: true},
    media: [media],
})

module.exports = model('Shoes', schema)