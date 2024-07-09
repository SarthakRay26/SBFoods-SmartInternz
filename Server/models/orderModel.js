import mongoose from 'mongoose';

// order Schema

const orderItemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const OrderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [orderItemSchema],
    address: {
        type: String,
        required: true
    }
});

const orderDB = mongoose.model('orderDB', OrderSchema);
export default orderDB;