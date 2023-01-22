let HomeModel = require('../Model/home_Model')
let express = require('express')
let HomeRoute = express.Router()

HomeRoute.get('/',async(req,res)=>{
    try{
        let HomePageDetail = await HomeModel.find()
        res.send(HomePageDetail)
    }catch(err){
        res.send(err)
    }
})

module.exports = HomeRoute