import express from 'express';
const router = express.Router();
import * as UserController from '../controllers/userController.js';

router.post("/SignUp", UserController.SignUp);
router.post("/SignIn", UserController.SignIn);

export default router;