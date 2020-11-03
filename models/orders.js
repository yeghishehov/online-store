const { Schema, model } = require("mongoose");

const schema = new Schema({
    collectionName: {type: String, required: true},
    type: {type: String, required: true},
    shoesName: {type: String, required: true},
    color: {type: String, required: true},
    price: {type: String, required: true},
    size: {type: String, required: true},
    imagesSrc: {type: String, required: true},
    productPageSrc: {type: String, required: true},
})

module.exports = model("Orders", schema)