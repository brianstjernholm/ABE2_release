//import * as config from '../config'
const config = require('../config')
const mongoose = require('mongoose');

let dbUrl = config.MONGODB_DEV_URI;

if (process.env.NODE_ENV === 'production') {
    dbUrl = config.MONGODB_PROD_URI;
}

//Listening for mongoose connection events
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbUrl}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Connect to database
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Listen for signals to shutdown, so we can close the connection to the database
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};


