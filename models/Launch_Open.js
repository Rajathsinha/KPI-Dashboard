const mongoose = require('mongoose');

// Define a Mongoose schema for the CSV data
const LaunchOpenSchema = new mongoose.Schema({
    key: String,
    client: String,
    issueType: String,
    originalEstimate: String,
    timeSpent: String
});

// Create a Mongoose model
const LaunchOpenRecord = mongoose.model('launch_open_Record', LaunchOpenSchema);

module.exports = LaunchOpenRecord;
