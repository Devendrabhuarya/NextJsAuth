// models/user.js
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please provide a username']
    },
    email: {
        type: String,
        required: [true, 'please provide a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please provide a password']
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User
