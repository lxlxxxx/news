var express = require('express');
//图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })
const NewsController=require('../../controllers/admin/NewsController')

var NewsRouter = express.Router();

/* GET home page. */
NewsRouter.post('/adminapi/news/add',upload.single("file"),NewsController.add)
NewsRouter.get('/adminapi/news/list/:id',NewsController.getList)
NewsRouter.get('/adminapi/news/list',NewsController.getList)
NewsRouter.post('/adminapi/news/list',upload.single("file"),NewsController.updateList)
NewsRouter.put('/adminapi/news/publish',NewsController.publish)
NewsRouter.delete('/adminapi/news/list/:id',NewsController.delList)



module.exports = NewsRouter;
