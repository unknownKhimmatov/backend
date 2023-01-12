const mongoose = require('mongoose')
const urlGloabalDB = "mongodb://localhost:27017/firdavs"


const connect = async () => {
    try {
        const connectDb = await mongoose.connect(urlGloabalDB, {
            useNewUrlParser: true,
        })
        console.log("Global mongodb connect", connectDb.connection.host);
    } catch (error) {
        console.log("error", error);
    }
}

module.exports = connect;