const mongoose = require('mongoose')
const { Schema } = mongoose

const skillSchema = new Schema({

    skill: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('skill', skillSchema)




