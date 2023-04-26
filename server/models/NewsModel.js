const mongoose = require('mongoose')
const Schema=mongoose.Schema

const NewsType={
    title:String,
    content:String,
    category:Number,//1 最新动态  2 典型案例   3 通知公告
    cover:String,
    isPublish:Number, //0 未发布 1发布
    editTime:Date
}

const NewsModel=mongoose.model('news',new Schema(NewsType))
module.exports=NewsModel