const { postQueries } = require("../query/PostQuery")
const { pool } = require("../db");

const getAll = async () => {
    const posts = await pool.query(postQueries.getAll);
    return posts.rows;    
}

const getPostsByUserId = async (user_id) => {
    const posts = await pool.query(postQueries.getByUser, [user_id]);
    return posts.rows;
}

const getPostById = async (id) => {
    const post = await pool.query(postQueries.getPostById, [id]);
    return post.rows[0];
}

const createPost = async ( title, content, caption, post_by, created_at ) => {
    const post = await pool.query(postQueries.createPost, [title, caption, content, post_by, created_at]);
    return post.rows[0];
}

const likeThePost = async (id) => {
    const post = await pool.query(postQueries.updateLikes, [id]);
    return post.rows[0];
}

module.exports = {getAll, getPostsByUserId, getPostById, createPost, likeThePost};