const mongoose = require('mongoose')
const urlGloabalDB = "mongodb+srv://school:school2023@cluster0.jv6d7fe.mongodb.net/"


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
