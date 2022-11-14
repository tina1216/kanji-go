import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//parent of each comment
const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [{
        default: "",
        title: String,
        body: String,
        userId: String,
        postedBy:{
            type: Schema.Types.ObjectId, 
            ref: "User",
        }
    }],
    userId: {
        type: String,
        required: true,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date : {
        type: String,
    }
}, { timestamps: true })

export default mongoose.model("Question", QuestionSchema);
