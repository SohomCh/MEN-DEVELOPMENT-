const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({


// Defining Schema


    username : String,
    email : String,
    password :String,

    // // now if we need only designated values


    // gender :{
    //     type :String,
    //     enum:['male','female'] // we use enum

    // }


})

const usermodel = mongoose.model('usermodel', userSchema) // very important

module.exports = usermodel // for exporting