const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('recordSchema',recordSchema);