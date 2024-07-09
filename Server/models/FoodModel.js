import mongoose from 'mongoose';

//food Schema

const FoodSchema = mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
},{timestamps:true});

const foodDB = mongoose.model('foodDB', FoodSchema);

export default foodDB;