import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//child of Quiz
const kanjiSchema = mongoose.Schema({
    character: {
        type: String,
    },
    meaning: {
        type: String,
    },
    onyomi: {
        type: String,
    },
    kunyomi: {
        type: String,
    },
    image : {
        type: [String],
    },
    examples: [{
        japanese: String
    }]
})


export default mongoose.model("Kanji", kanjiSchema);