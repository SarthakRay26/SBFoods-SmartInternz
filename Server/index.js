import express from 'express';
import {config as dotEnvConfig} from 'dotenv';
import cors from 'cors';
import connection from './db/connection.js'
import userAuthentication from './routes/userAuthentication.js';
import FoodItems from './routes/FoodItems.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/OrderRoute.js';

dotEnvConfig();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/UserAuth', userAuthentication);
app.use('/api/Food', FoodItems);
app.use('/api', userRoutes);
app.use('/api/Order', orderRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({message:'server is running'});
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running http://localhost:${process.env.PORT}`);
})