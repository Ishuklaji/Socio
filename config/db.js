const mongoose = require("mongoose")
const colors = require('colors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`.bgMagenta.white);
    }
    catch (error) {
        console.log(`Error while connecting to database ${error}`.bgRed.white)
    }
}

module.exports = connectDB