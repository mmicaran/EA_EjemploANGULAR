const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    name: {type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, require: true },
    phone: { type: Number, unique: true, required: false },
    gender: String,
    birthday: Date,
    nationality: String,
    picture: String,
    password: {type: String, require: true},
    description: String,
    connected: Boolean
});

module.exports = mongoose.model('User', UserSchema);