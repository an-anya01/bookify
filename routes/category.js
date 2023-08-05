import express from "express";

const router = express.Router();

//middlewares
import { requireSignin,isAdmin} from "../middleware/auth.js";

// controllers
import {create,update,remove,list,read,productsByCategory} from "../controllers/category.js";
// we are using above 2 middleware bcz we only want admin to have option of creating categories;
router.post("/category",requireSignin,isAdmin,create);
router.put('/category/:categoryId',requireSignin,isAdmin,update);
router.delete('/category/:categoryId',requireSignin,isAdmin,remove);
router.get('/categories',list);
router.get('/category/:slug',read);
//it's fine to use same name as the operations are different put and post
router.get("/products-by-category/:slug", productsByCategory);

export default router;


//CRUD makes you  aba backend 
//Create
//Read
//Update
//Delete