const   NewsModel=require('../../models/NewsModel')

const NewsService={
    add:async({title,content,category,isPublish,editTime,cover})=>{
         return NewsModel.create({
            title,content,category,isPublish,editTime,cover
        })
    },
    getList:async({_id})=>{
        return _id?NewsModel.find({_id}):NewsModel.find({})
         
    },
    publish:async({_id,isPublish,editTime})=>{
        return NewsModel.updateOne({
            _id
        },{
            isPublish,
            editTime
        })
    },
    delList:async(id)=>{
        return NewsModel.deleteOne({_id:id})
    },
    updateList:async({_id,title,content,category,isPublish,editTime,cover})=>{
        if(cover){
            return NewsModel.updateOne({
                _id
            },{
                title,content,category,isPublish,editTime,cover
            })
        }else{
            return NewsModel.updateOne({
                _id
            },{
                title,content,category,isPublish,editTime
            })
        }
    }
}

module.exports=NewsService