const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('Talent', talentSchema);
