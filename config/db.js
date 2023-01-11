const mongoose = require('mongoose')
const urlGloabalDB = "mongodb+srv://firdavsbackend:firdavsbackend2023@firdavsglobalbackend.cmtuqdr.mongodb.net/?retryWrites=true&w=majority"


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