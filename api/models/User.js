import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profImg: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })


export default mongoose.model("User", userSchema);