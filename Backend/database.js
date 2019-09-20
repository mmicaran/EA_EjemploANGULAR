const mongoose = require('mongoose');
const colors = require('colors');

const URI = 'mongodb://localhost/users-crud';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'.green))
    .catch(err => console.error(err))   

module.exports = mongoose;