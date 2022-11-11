import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Parent of Quiz
const QuizSchema = mongoose.Schema({
    level: {
        type: String,
    },
    title: {
        type:String,
    },
    allKanji: {
        type:[String],
    }
})


export default mongoose.model("Quiz", QuizSchema);