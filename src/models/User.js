// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    // Otros campos si son necesarios
});



const User = mongoose.model('User', userSchema);

module.exports = User;
