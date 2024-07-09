import orderDB from '../models/orderModel.js';

export async function AddOrder(req,res){
    const {userId, orderItems, address} = req.body;

    if(!userId || !orderItems || !address){
        return res.status(400).json({message: "All fields are required"});
    }else{
        try {
            const NewOrder = new orderDB({
                userId, orderItems, address
            });

            const orderPlaced = await NewOrder.save();
            if(orderPlaced){
                res.status(201).json({message: "Order placed successfully"});
            }else{
                res.status(500).json({message: "Failed to place order"});
            }
        } catch (error) {
            res.status(400).json({error: error});
        }
    }
}

export async function GetOrders(req,res){
    try {
        const orders = await orderDB.find({});
        if(orders){
            res.status(200).json(orders);
        }else{
            res.status(404).json({message: "No orders found"});
        }
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function GetOrderById(req,res){
    const {id} = req.body;
    if(!id){
        return res.status(400).json({message: "Order Id is required"});
    }else{
        try {
            const order = await orderDB.findById(id);
            if(order){
                res.status(200).json(order);
            }else{
                res.status(404).json({message: "No order found"});
            }
        } catch (error) {
            res.status(400).json({error: error});
        }
    }
}

export async function deleteOrder(req,res){
    const {id} = req.body;
    if(!id){
        return res.status(400).json({message: "Order Id is required"});
    }else{
        try {
            const order = await orderDB.findByIdAndDelete(id);
            if(order){
                res.status(200).json({message: "Order deleted successfully"});
            }else{
                res.status(404).json({message: "No order found"});
            }
        } catch (error) {
            res.status(400).json({error: error});
        }
    }
}