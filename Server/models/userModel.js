import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    password:{
        type: String,
        required: true,
    },
    tokens:[{
        token:{
            type: String,
        }
    }],
    isAdmin:{
        type: Boolean,
        required: true,
        default: false,
    }
}, {timestamps: true});

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,8)
    }
});

const user = new mongoose.model('user', userSchema);
export default user;