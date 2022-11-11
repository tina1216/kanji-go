import Comment from "../models/Comment.js";

//create (generate) comment
export const createComment = async(req, res) => {

    const newComment = new Comment(req.body)

    try {
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch(err) {
        res.status(500).json(err)
    }
}

//update
// export const updateQuestion = async(req, res) => {
//     try {
//         const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
//         res.status(200).json(updatedQuiz)
//     } catch(err) {
//         res.status(500).json(err)
//     }
// }

//delete
export const deleteComment = async(req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment has been deleted.")
    } catch(err) {
        res.status(500).json(err)
    }
}


//get all Comment
export const getAllComment = async(req, res) => {
    try {
        const Comments = await Comment.find(req.params.id).sort({ createdAt: 'desc' });;
        res.status(200).json(Comments)
    } catch(err) {
        res.status(500).json(err)
    }
}