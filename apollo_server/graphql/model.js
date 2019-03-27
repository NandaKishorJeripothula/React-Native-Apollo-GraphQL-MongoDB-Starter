/** this file will hold our Mongoose model */
/**Resembles the table struture in SQL DB */
const mongoose = require('mongoose');
const PresidentSchema = mongoose.Schema({
    name: String,
    party: String,
    term: String

})
const President = mongoose.model('President', PresidentSchema);

module.exports = President;