import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name:{
        type: String, 
        trim: true, 
        required: true, 
        maxLength: 32, 
        unique: true
    },

        slug:{
            type: String,
            unique: true,
            lowercase: true,
            //slug is used b,ecause wehn we use any model and it is shown in the search bar it show rect-js if not using slug it will show some random id

        }
    }
);

export default mongoose.model("Category",categorySchema);