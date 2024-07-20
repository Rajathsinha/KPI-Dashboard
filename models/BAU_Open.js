const mongoose = require('mongoose');

// Define a Mongoose schema for the CSV data
const banOpenSchema = new mongoose.Schema({
    key: String,
    client: String,
    issueType: String,
    originalEstimate: String,
    timeSpent: String
});

// Create a Mongoose model
const BANOpen = mongoose.model('BAU_open_Record', banOpenSchema);

module.exports = BANOpen;
