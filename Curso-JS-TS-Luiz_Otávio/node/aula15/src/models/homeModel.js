const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    title: {type: String ,require: true},
    description : String
})

const HomeModel = mongoose.model('home', homeSchema)

module.exports = HomeModel