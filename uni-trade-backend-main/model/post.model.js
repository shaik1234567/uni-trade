const { types } = require('20/mime');
const mongoose = require('mongoose');


const postschema = new mongoose.Schema({
    userid: {
        type: String,
         required : true
    },
    desc : {
        type : String,
    },
    image : String
},
{
    timestamps : true
}
)

const postsmodel = mongoose.model('posts' , postschema);

module.exports = {
    postsmodel
}