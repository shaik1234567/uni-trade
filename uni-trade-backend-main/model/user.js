const mongo = require('mongoose')

const userSchema = new mongo.Schema({
    id : {
        type : String,
        required : true,
        unique : true
    },

    imageUrl : {
        type : String,
        required : true
    },

    phone :{
        type : String,
        required : true
    }
});

const userModal = mongo.model('User', userSchema)

module.exports = {
    userModal
}