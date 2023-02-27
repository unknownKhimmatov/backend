const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    lastName: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    sinf: {
        type: String
    },
    daraja: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("ForMT", userSchema)