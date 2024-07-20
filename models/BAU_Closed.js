const mongoose = require('mongoose');

// Define the schema for BAU_Closed collection
const bauClosedSchema = new mongoose.Schema({
    key: String,
    client: String,
    issueType: String,
    originalEstimate: String,
    timeSpent: String
});

// Create a Mongoose model for BAU_Closed collection
const BAUClosedRecord = mongoose.model('BAU_Closed_Record', bauClosedSchema);

module.exports = BAUClosedRecord;
