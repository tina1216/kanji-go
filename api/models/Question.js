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
        title: String,
        text: String,
        postedBy:{type: Schema.Types.ObjectId, ref: "User"}
    }],
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

QuestionSchema.methods.addComments = function ( val ) {
    this.comments = Number( val );
}


export default mongoose.model("Question", QuestionSchema);
