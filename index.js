// Require necessary modules
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const xlsx = require('xlsx');

const bauOpenRoutes = require('./Routes/bauOpenRoutes');
const bauCloseRoutes = require('./Routes/bauCloseRoutes');
const launchCloseRoutes = require('./Routes/launchCloseRoutes');
const launchOpenRoutes = require('./Routes/launchOpenRoutes');

const BAUOpenRecord = require('./models/BAU_Open');
const BAUCloseRecord = require('./models/BAU_Closed');
const LaunchCloseRecord = require('./models/Launch_Closed');
const LaunchOpenRecord = require('./models/Launch_Open');

const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

mongoose.connect('mongodb://localhost:27017/KPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.use('/bauOpen', bauOpenRoutes);
app.use('/bauClose', bauCloseRoutes);
app.use('/launchClose', launchCloseRoutes);
app.use('/launchOpen', launchOpenRoutes);

app.post('/upload', upload.single('csvFile'), (req, res) => {
    const filename = req.file.originalname;

    if (filename.startsWith('BAU_Open_Tickets')) {
        parseXLSXAndInsertIntoCollection(req.file.buffer, BAUOpenRecord, res);
    } else if (filename.startsWith('BAU_Closed_Tickets')) {
        parseXLSXAndInsertIntoCollection(req.file.buffer, BAUCloseRecord, res);
    } else if (filename.startsWith('Launch_Closed_Tickets')) {
        parseXLSXAndInsertIntoCollection(req.file.buffer, LaunchCloseRecord, res);
    } else if (filename.startsWith('Launch_Open_Tickets')) {
        parseXLSXAndInsertIntoCollection(req.file.buffer, LaunchOpenRecord, res);
    } else {
        res.status(400).send('Invalid filename');
    }
});

function parseXLSXAndInsertIntoCollection(data, Model, res){
    const workbook = xlsx.read(data, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; 
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    const results = jsonData.map(row => ({
        key: row.Key,
        client: row.Client,
        issueType: row['Issue Type'],
        originalEstimate: row['Original estimate'],
        timeSpent: row['Time Spent']
    }));

    // Insert parsed XLSX data into the specified collection
    Model.insertMany(results)
        .then(() => {
            console.log('XLSX data inserted into collection:', Model.collection.collectionName);
            res.redirect('/');
        })
        .catch(err => {
            console.error('Error inserting XLSX data into collection:', err);
            res.status(500).send('Internal Server Error');
        });
}

// Set up view engine and middleware
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({ extended: false }));

// Define route for homepage rendering
app.get('/', (req, res) => {
    return res.render('home');
});

app.use(express.static(path.join(__dirname, 'public')));



app.get('/upload', (req, res) => {
    res.render('upload');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/', (req, res) => {
    res.redirect('/home');
});

// Start the serve
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
