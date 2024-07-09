import express from 'express';
const router = express.Router();
import * as OrderController from '../controllers/OrderController.js';

router.post("/AddOrder", OrderController.AddOrder);
router.post("/GetOrders", OrderController.GetOrders);
router.post("/GetOrderById", OrderController.GetOrderById);
router.post("/deleteOrder", OrderController.deleteOrder);

export default router;