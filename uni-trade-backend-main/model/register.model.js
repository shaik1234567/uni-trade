const mongoose = require('mongoose');


const registerschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    rollno: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        unique: false
    },
    profilepicture : String
},
{timestamps : true}
)

const registermodel = mongoose.model('uni-trade', registerschema)

module.exports = {
    registermodel
}