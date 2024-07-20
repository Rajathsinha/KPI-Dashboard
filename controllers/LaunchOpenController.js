const LaunchOpenRecord = require('../models/Launch_Open');

exports.getAll = async (req, res) => {
    try {
        const records = await LaunchOpenRecord.find();
        // Perform calculations or any additional logic if needed
        // Send the data as response
        res.render('launch_open', { data: records });

     } catch (error) {
        console.error('Error fetching Launch Open records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAll1 = async (req, res) => {
    try {
        const records = await LaunchOpenRecord.find();
        // Perform calculations or any additional logic if needed
        // Send the data as response
        res.render('launch_open1', { data: records });

     } catch (error) {
        console.error('Error fetching Launch Open records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
