import Kanji from "../models/Kanji.js"
import Quiz from "../models/Memo.js"

//create (generate)
export const createKanji = async(req, res, next) => {
    const quizId = req.params.quizId;
    const newKanji = new Kanji(req.body)

    try {
        const savedKanji = await newKanji.save()
        try {
            await Quiz.findByIdAndUpdate(quizId, {$pull: {allKanji: req.params.id}})
        } catch (error) {
            res.status(500).json(error)
        }
        res.status(200).json(savedKanji)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update
export const updateKanji = async(req, res) => {
    try {
        const updatedKanji = await Kanji.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedKanji)
    } catch(err) {
        res.status(500).json(err)
    }
}

//delete
export const deleteKanji = async(req, res) => {
    const quizId = req.params.quizId;

    try {
        await Kanji.findByIdAndDelete(req.params.id);
        try {
            await Quiz.findByIdAndUpdate(quizId, {$pull: {allKanji: req.params.id}})
        } catch (error) {
            res.status(500).json(error)
        }
        res.status(200).json("Kanji has been deleted.")
    } catch(err) {
        res.status(500).json(err)
    }
}

//get one
export const getKanji = async(req, res) => {
    try {
        const kanji = await Kanji.findById(req.params.id);
        res.status(200).json(kanji)
    } catch(err) {
        res.status(500).json(err)
    }
}

//get all
//get all quiz
export const getAllKanji = async(req, res) => {
    try {
        const kanjis = await Kanji.find(req.params.id);
        res.status(200).json(kanjis)
    } catch(err) {
        res.status(500).json(err)
    }
}