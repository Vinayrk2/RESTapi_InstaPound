const Comment = require("../model/CommentModel")

const getCommentsByPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const comments = await Comment.getCommentsByPost(postId, (page-1)*15);
        res.json(comments)
    } catch (err) {
        res.status(500).json({ message: "Error fetching comments" });
    }
}

const getCommentsByUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const comments = await Comment.getCommentsByUser(userId, (page-1)*15);
        res.json(comments)
    } catch (err) {
        res.status(500).json({ message: "Error fetching comments" });
    }
}

const createComment = async (req, res) => {
    try {
        const { user_id, post_id, message } = req.body;
        const comment = await Comment.createComment(user_id, post_id, message);
        res.json(comment)
    } catch (err) {
        res.status(500).json({ message: "Error creating comment" });
    }
}

const removeComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const comment = await Comment.removeComment(commentId);
        res.json({ message: "Comment removed successfully." })
    } catch (err) {
        res.status(500).json({ message: "Error removing comment" });
    }
}

module.exports = { getCommentsByPost, getCommentsByUser, createComment, removeComment };

