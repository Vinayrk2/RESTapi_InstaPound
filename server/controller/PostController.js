const postModel = require("../model/PostModel")
const userModel = require("../model/UserModel")

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getAll();
        if (!posts)
            res.status(404).json({message: "No Post Available."})
        else
            res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postModel.getPostById(id);
        if (post)
            return res.status(200).json(post);
        else
            return res.status(404).json({ message: "Post is no longer available." })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const createPost = async (req, res) => {
    try {
        const { title, content, caption, posted_by } = req.body;
        const created_at = new Date()
        const post = await postModel.createPost(title, content, caption, posted_by, created_at);
        res.status(201).json(post);
        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const likeThePost = async (req, res) => {
    try {
        const id = req.params.id;
        const user_id = req.body.user_id;
        const user = await userModel.getUserById(user_id);
        if (user) {
            const post = await postModel.likeThePost(id);
            res.status(200).json(post);
        } else
          res.status(400).json({message: "Bad Request"})  
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { getAllPosts, createPost, getPostById, likeThePost }