import express from 'express';
import * as FoodController from '../controllers/FoodController.js';
import checkAdmin from '../middleware/checkAdmin.js';
const router = express.Router();

router.get('/foodItems', FoodController.getFoodData);
router.patch('/foodItems/:id',checkAdmin, FoodController.updateFoodData);
router.post('/foodItems/addItem',checkAdmin, FoodController.addFoodData);

export default router;