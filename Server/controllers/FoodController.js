import foodDB from '../models/FoodModel.js'

export async function getFoodData(req,res){
    try {
        const allFoodData = await foodDB.find();
        res.status(200).json(allFoodData);
    } catch (error) {
        console.error(error);
    }
}

export async function updateFoodData(req, res) {
    const { id } = req.params;
    const { title, price } = req.body;

    try {
        const foodUpdate = await foodDB.findByIdAndUpdate({ _id: id }, { title, price }, { new: true });
        await foodUpdate.save();

        res.status(200).json({ 'message': 'Updated Successfully', foodUpdate });
    } catch (error) {
        res.status(500).json({ error: "Server Error or Failed to Save" });
    }
}

export async function addFoodData(req,res){
    const {title,price,image} = req.body;
    if(!title || !price || !image) return res.status(400).json({error:"Please Fill all the fields"});
    try {
        const newFood = new foodDB({title,price,image});
        await newFood.save();
        res.status(200).json({message:'Food Item Added Successfully',newFood});
    } catch (error) {
        res.status(500).json({error:"Server Error or Failed to Save"});
    }
}