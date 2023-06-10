const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    is_active  :{
        type : Boolean,
        default : false
    }
},{
    timestamps : true
});

const User = mongoose.model('User',UserSchema);

module.exports = User;