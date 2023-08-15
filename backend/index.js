const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

const records = require('./routes/records');
app.use('/api',records);

const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT,() => {
    console.log(`server started successfully at ${PORT}`);
})




