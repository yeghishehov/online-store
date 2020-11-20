const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    role: { type: String },
    token: { type: String },
    // tokenName: { type: String },
})

module.exports = model('User', schema)