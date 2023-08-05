import express from "express";
import formidable from "express-formidable";
const router = express.Router();

//middlewares
import { requireSignin,isAdmin} from "../middleware/auth.js";

// controllers
import {create,list,read,photo} from "../controllers/product.js";
import { remove,update,filteredProducts ,productsCount,listProducts,productsSearch,
    relatedProducts,getToken,processPayment,orderStatus} from "../controllers/product.js";

// we are using above 2 middleware bcz we only want admin to have option of creating categories;
router.post('/product',requireSignin,isAdmin, formidable(),create);
router.get('/products',list);
router.get('/product/:slug',read);
router.get('product/photo/:productId',photo);
router.delete('/product/:productId',requireSignin,isAdmin,remove);
router.put("/product/:productId",requireSignin,isAdmin,formidable(),update);
router.post('/filtered-products',filteredProducts);
router.get("/products-count",productsCount);
router.get("/list-products/:page",listProducts);
router.get('/products/search/:keyword',productsSearch);
router.get('/related-products/:productId/:categoryId',relatedProducts)
router.get('/braintree/token',getToken)
router.post("/braintree/payment", requireSignin, processPayment);
router.put("/order-status/:orderId", requireSignin, isAdmin, orderStatus);
export default router;