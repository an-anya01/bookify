import express from "express";
import dotenv from "dotenv";
import mongoose from"mongoose";
import morgan from "morgan";
import authRoutes from'./routes/auth.js';
import cors from "cors";
// whenever we create a route we need to import it in index otherwise it eill not be executed
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import path from "path";

//console.log('process=>',process);
//const express=require("express");
dotenv.config();
const app=express();
//db

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB ERROR=>",err));


// middleware it gives http code and command and time taken 
//app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})




app.use("/api",authRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);


app.use('/uploads', express.static('./uploads'));
// app.use((req,res,next)=>{
//     console.log("ABBLE");
//     next();
// });






// app.get('/users',(req,res)=>{
//     res.json({
//         data:'Ryan Zen ababc',
//     });

// });
const port=process.env.PORT;
app.listen(port,function(){
    console.log(`Node server is running on port ${port}`);
});

//.env .gitignore

