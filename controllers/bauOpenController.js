
const BAUOpenRecord = require('../models/BAU_Open');

exports.getAll = async (req, res) => {
    try {
        const records = await BAUOpenRecord.find();
        // Perform calculations or any additional logic if needed
        // Send the data as response
        res.render('bau_open', { data: records });
    } catch (error) {
        console.error('Error fetching BAU Open records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getAll1 = async (req, res) => {
    try {
        const records = await BAUOpenRecord.find();
        // Perform calculations or any additional logic if needed
        // Send the data as response
        res.render('bau_open1', { data: records });
    } catch (error) {
        console.error('Error fetching BAU Open records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
