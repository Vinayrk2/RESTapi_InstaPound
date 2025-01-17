const {pool} = require("../db");
const {userQueries} = require("../query/UserQuery")

const getAllUsers = async () => {
    const result = await pool.query(userQueries.getAll);
    return result.rows;
}

const getUserById = async (id) => {
    const result = await pool.query(userQueries.getUserById, [id]);
    return result.rows[0];
}

const createUser = async (name, email, username, password) => {
    const result = await pool.query(userQueries.createUser, [name, email, username, password]);
    return result.rows[0];
}

const deleteUser = async (id) => {
    const result = await pool.query(userQueries.deleteUser, [id]);
    return result.rows[0];
}

const updateUser = async (id, name, username) => {
    const result = await pool.query(userQueries.updateUserData, [username, name, id]);
    return result.rows[0];
}

module.exports = { getAllUsers, getUserById , createUser, deleteUser, updateUser};