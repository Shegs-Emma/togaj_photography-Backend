const mongoose      = require('mongoose');

const photoSchema = mongoose.Schema({
    photoUrl: {type: String, required: true},
    imageCategory: { type: String, required: true }
});

module.exports = mongoose.model('Photo', photoSchema);