import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//each comment to a question
const CommentSchema = mongoose.Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: "post"
    },
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    sentTo: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })


export default mongoose.model("Comment", CommentSchema);