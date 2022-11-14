import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    questionRef: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
    date : {
        type: String,
        required: true,
    }
}, { timestamps: true })


export default mongoose.model("Comment", CommentSchema);