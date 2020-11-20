const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const TokenSchema = Schema({
    value: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Token', TokenSchema);