const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    mobileNumber: {
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('User', userSchema);
