let mongoose = require('mongoose')

let HomeSchema = mongoose.Schema({
    id:Number,
    url:String
})

let HomeModel = mongoose.model('homepage',HomeSchema)

module.exports = HomeModel