const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://nickscript:Paul4877@cluster0.v0zdj5g.mongodb.net/mern-rooms'

mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on("error", (err) => {
    console.log('MongoDB connection failed:', err.message);
});

connection.on("connected", () => {
    console.log('MongoDB connection successful');
});

module.exports = mongoose;