const mongoose = require('mongoose')
const urlGloabalDB = "mongodb+srv://mt-academy:mt-academy@mt-academy.xger4dn.mongodb.net/?retryWrites=true&w=majority/test"


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