const User = require("../model/UserModel")
const Post = require("../model/PostModel")

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.getUserById(id);
        const posts = await Post.getPostsByUserId(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ "user": user, "posts": posts })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const updateUserData = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, username } = req.body;
        const user = await User.updateUser(id, name, username)
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.deleteUser(id);
        res.status(200).json({message: "User Deleted Successfully"});
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const user = await User.createUser(name, email, username, password);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {getAllUsers, getUserById, updateUserData, deleteUser, createUser}