const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSChema = new Schema({
    googleId: String
});

mongoose.model('users', userSChema);