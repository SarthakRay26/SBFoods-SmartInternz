import express from 'express';
import checkAdmin from '../middleware/checkAdmin.js';
import user from '../models/userModel.js';
import JWT from 'jsonwebtoken';

const router = express.Router();

router.get('/checkAdmin', async (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const authenticatedUser = await user.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!authenticatedUser) {
      return res.status(401).json({ message: 'Please authenticate.' });
    }

    res.status(200).json({ isAdmin: authenticatedUser.isAdmin });
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
});

router.post('/findUserByToken', async (req, res) => {
  try {
    const token = req.body.userToken;
    if (!token) {
      return res.status(400).json({ message: 'Token is required.' });
    }
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const authenticatedUser = await user.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!authenticatedUser) {
      return res.status(401).json({ message: 'Please authenticate first.' });
    }

    res.status(200).json({ user: authenticatedUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(401).json({ message: 'Please authenticate.' });
  }
});

export default router;