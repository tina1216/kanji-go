import Memo from "../models/Memo.js";

//create (generate) memo
export const createMemo = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    const newMemo = new Memo(req.body)

    try {
        const savedMemo = await newMemo.save()
        res.status(200).json(savedMemo)
    } catch(err) {
        res.status(500).json(err)
    }
}

//update
export const updateMemo = async(req, res) => {
    try {
        const updatedMemo = await Memo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedMemo)
    } catch(err) {
        res.status(500).json(err)
    }
}

//delete
export const deleteMemo = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        await Memo.findByIdAndDelete(req.params.id);
        res.status(200).json("Memo has been deleted.")
    } catch(err) {
        res.status(500).json(err)
    }
}

//get specific memo
export const getMemo = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const memo = await Memo.findById(req.params.id);
        res.status(200).json(memo)
    } catch(err) {
        res.status(500).json(err)
    }
}

//get all memo
export const getAllMemo = async(req, res) => {
    try {
        const memos = await Memo.find(req.params.id);
        res.status(200).json(memos)
    } catch(err) {
        res.status(500).json(err)
    }
}