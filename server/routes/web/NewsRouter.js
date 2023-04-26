var express = require('express');
//图片上传

const NewsController=require('../../controllers/web/NewsController')

var NewsRouter = express.Router();

/* GET home page. */

NewsRouter.get('/webapi/news/list',NewsController.getList)
NewsRouter.get("/webapi/news/list/:id",NewsController.getList)
NewsRouter.get("/webapi/news/toplist",NewsController.getTopList)



module.exports = NewsRouter;
