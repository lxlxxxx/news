const mongoose = require('mongoose')
const Schema=mongoose.Schema

const ProductType={
    title:String,
    introduction:String,
    cover:String,
    detail:String, //0 未发布 1发布
    editTime:Date
}

const ProductModel=mongoose.model('product',new Schema(ProductType))
module.exports=ProductModel