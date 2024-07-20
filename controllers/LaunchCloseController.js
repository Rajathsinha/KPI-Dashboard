const LaunchCloseRecord = require('../models/Launch_Closed');

exports.getAll = async (req, res) => {
    try {
        const records = await LaunchCloseRecord.find();
        // Perform calculations or any additional logic if needed
        // Send the data as response
        res.render('launch_close', { data: records });
    } catch (error) {
        console.error('Error fetching Launch Close records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getAll1 = async (req, res) => {
    try {
        const records = await LaunchCloseRecord.find();
        // Perform calculations or any additional logic if needed
        // Send the data as response
        res.render('launch_close1', { data: records });
    } catch (error) {
        console.error('Error fetching Launch Close records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
