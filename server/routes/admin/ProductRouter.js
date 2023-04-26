var express = require('express');
//图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/productuploads/' })
const ProductController=require('../../controllers/admin/ProductController')

var ProductRouter = express.Router();

/* GET home page. */
ProductRouter.post('/adminapi/product/add',upload.single("file"),ProductController.add)
ProductRouter.post('/adminapi/product/list',upload.single("file"),ProductController.updateList)
ProductRouter.get('/adminapi/product/list',ProductController.getList)
ProductRouter.get('/adminapi/product/list/:id',ProductController.getList)
ProductRouter.delete('/adminapi/product/list/:id',ProductController.delList)



module.exports = ProductRouter;