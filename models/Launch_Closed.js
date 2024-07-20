const mongoose = require('mongoose');

// Define a Mongoose schema for the CSV data
const LaunchClosedSchema = new mongoose.Schema({
    key: String,
    client: String,
    issueType: String,
    originalEstimate: String,
    timeSpent: String
});

// Create a Mongoose model
const LAUNCHClosed = mongoose.model('launch_closed_Record', LaunchClosedSchema);

module.exports = LAUNCHClosed;
