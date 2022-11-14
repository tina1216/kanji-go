import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MemoSchema = mongoose.Schema({
    memo: {
        type: String,
        required: true,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date : {
        type: String,
    }
}, { timestamps: true })


export default mongoose.model("Memo", MemoSchema);