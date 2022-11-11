import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//parent of each comment
const QuestionSchema = new mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    parentOf: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

QuestionSchema.methods.addComments = function ( val ) {
    this.comments = Number( val );
}


export default mongoose.model("Question", QuestionSchema);
