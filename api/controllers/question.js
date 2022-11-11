import Question from "../models/Question.js";

//create (generate) question
export const createQuestion = async(req, res) => {
    const newQuestion = new Question(req.body)

    try {
        const savedQuestion = await newQuestion.save()
        res.status(200).json(savedQuestion)
    } catch(err) {
        res.status(500).json(err)
    }
}


//update
export const updateQuestion = async(req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedQuestion)
    } catch(err) {
        res.status(500).json(err)
    }
}

//delete
export const deleteQuestion = async(req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.status(200).json("Question has been deleted.")
    } catch(err) {
        res.status(500).json(err)
    }
}

//get one specific question
export const getQuestion = async(req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json(question)
    } catch(err) {
        res.status(500).json(err)
    }
}


//get all questions
export const getAllQuestion = async(req, res) => {
    try {
        const questions = await Question.find(req.params.id);
        res.status(200).json(questions)
    } catch(err) {
        res.status(500).json(err)
    }
}

//-----------------------------------------
//create comment to a question
export const createComment = async(req,res) => {
    const comment = {
        title: req.body.title,
        text: req.body.text,
        postedBy: req.user._id
    }
    
    Question.findByIdAndUpdate(req.body.postId,{
        $push: {comments: comment}
    },{
        new: true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result) => {
        if(err){
            return res.status(422).json({error: err})
        }else{
            res.json(result)
        }
    })
}

//delete comment
export const deleteComment = async(req,res) => {
    Question.findOne(req.body.postId)
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, post) => {
        if(err || !post){
            return res.status(422).json({error: err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove().then(result => {
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
}