import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    isPasswordReseted: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String,
        default:''
    },
    resetToken: String,
    emailVerifCode: String,
});

const User = mongoose.model('User', userSchema);

export default User;