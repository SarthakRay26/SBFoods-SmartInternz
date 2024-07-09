import user from '../models/userModel.js';
import JWT from 'jsonwebtoken';

const checkAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        const authenticatedUser = await user.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!authenticatedUser || !authenticatedUser.isAdmin) {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        req.user = authenticatedUser;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Please authenticate.' });
    }
};
export default checkAdmin;