const mongoose = require('mongoose'); // Import mongoose

// Connecting to MongoDB
const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/your_database_name");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit process on connection failure
    }
};

// Exporting the Connection Function
module.exports = connect;
