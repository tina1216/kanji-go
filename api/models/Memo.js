import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MemoSchema = mongoose.Schema({
    memo: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    date : {
        type: String,
        required: true,
    }
}, { timestamps: true })


export default mongoose.model("Memo", MemoSchema);