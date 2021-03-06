// Dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Enviroment
require('dotenv').config();

// Server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// API Endpoints
const officesRouter = require('./routes/offices');
const usersRouter = require('./routes/users');

app.use('/offices', officesRouter);
app.use('/users', usersRouter);

// Proccess
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});