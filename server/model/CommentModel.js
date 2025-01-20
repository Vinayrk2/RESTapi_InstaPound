const { commentQueries } = require("../query/CommentQuery");
const {pool} = require("../db")

const getCommentsByPost = async (id, page) => {
    const comments = await pool.query(commentQueries.getByPostId, [id, page]);
    return comments.rows;
}

const getCommentsByUser = async (id, page) => {
    const comments = await pool.query(commentQueries.getByUserId, [id, page]);
    return comments.rows;
}

const removeComment = async (id) => {
    const query = await pool.query(commentQueries.deleteComment, [id]);
    return query.rows[0];
}

const createComment = async (userId, postId, Message) => {
    const query = await pool.query(commentQueries.createComment, [userId, postId, Message]);
    return query.rows[0];
}

module.exports = { getCommentsByPost, getCommentsByUser, removeComment, createComment };