//First-name, Last-name, username, password, tel, Locatoin, age, role
const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    tel:{
        type: Number
    },
    location:{
        type: String,
        lowerCase:true
    },
    age:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        required: true,
        default: 'user'
    },
    enabled:{
        type: Boolean,
        default: false
    }
},{timestamps:true})

module.exports = User = mongoose.model('users',userShema);