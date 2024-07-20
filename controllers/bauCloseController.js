const BAUCloseRecord = require('../models/BAU_Closed');

exports.getAll = async (req, res) => {
    try {
        const records = await BAUCloseRecord.find();

        
        console.log(records)
        // Perform calculations or any additional logic if needed
        // Send the data as response

        res.render('bau_closed', { data: records });
        
    } catch (error) {
        console.error('Error fetching BAU Close records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAll1 = async (req, res) => {
    try {
        const results = await BAUCloseRecord.find();


        res.render('bau_closed1', { data: results });
        
    } catch (error) {
        console.error('Error fetching BAU Close records:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

