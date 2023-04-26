var express = require('express');
//图片上传

const ProductController=require('../../controllers/web/ProductController')

var ProductRouter = express.Router();

/* GET home page. */

ProductRouter.get('/webapi/product/list',ProductController.getList)




module.exports = ProductRouter;