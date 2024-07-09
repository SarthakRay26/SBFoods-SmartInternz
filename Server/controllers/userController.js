import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import user from '../models/userModel.js';

export async function SignUp(req,res){
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: "All fields are required"})
    }else{
        try {
            const userExist = await user.findOne({email: email});
            if(userExist){
                res.status(400).json({message: "User already exists"});
            }else{
                const NewUser = new user({
                    email,password
                });

                // Hash the password
                const userRegisterd = await NewUser.save();
                if(userRegisterd){
                    res.status(201).json({message: "User registered successfully"});
                }else{
                    res.status(500).json({message: "Failed to register user"});
                }
            }
        } catch (error) {
            res.status(400).json({error: error});
        }
    }
}

export async function SignIn(req, res) {
    const { email, password, isAdmin } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    } else {
        try {
            const NewUser = await user.findOne({ email: email });
            if (NewUser) {
                if (await bcrypt.compare(password, NewUser.password)) {
                    const token = JWT.sign({ _id: NewUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
                    NewUser.tokens = { token: token };

                    await NewUser.save();
                    res.status(200).json({
                        message: "User logged in successfully",
                        token: token,
                        isAdmin: NewUser.isAdmin // Include isAdmin in the response
                    });
                } else {
                    res.status(400).json({ message: "Invalid credentials" });
                }
            } else {
                res.status(400).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
}