import Quiz from "../models/Quiz.js";

//create (generate) quiz
export const createQuiz = async(req, res) => {
    const newQuiz = new Quiz(req.body)

    try {
        const savedQuiz = await newQuiz.save()
        res.status(200).json(savedQuiz)
    } catch(err) {
        res.status(500).json(err)
    }
}

//update
export const updateQuiz = async(req, res) => {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedQuiz)
    } catch(err) {
        res.status(500).json(err)
    }
}

//delete
export const deleteQuiz = async(req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.id);
        res.status(200).json("Quiz has been deleted.")
    } catch(err) {
        res.status(500).json(err)
    }
}

//get one specific quiz
export const getQuiz = async(req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        res.status(200).json(quiz)
    } catch(err) {
        res.status(500).json(err)
    }
}

//get all quiz
export const getAllQuiz = async(req, res) => {
    try {
        const quizzes = await Quiz.find(req.params.id);
        res.status(200).json(quizzes)
    } catch(err) {
        res.status(500).json(err)
    }
}