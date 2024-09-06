const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI and client setup
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Route to get jobs
app.get('/jobs', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('jobdb');
        const collection = database.collection('jobs');
        const jobs = await collection.find().toArray();
        res.json(jobs);
    } catch (err) {
        res.status(500).send(err);
    } finally {
        await client.close();
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
