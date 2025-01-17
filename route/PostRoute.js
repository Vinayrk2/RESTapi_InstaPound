const postController = require("../controller/PostController")
const express = require("express")

const router = express.Router()

router.get("/", postController.getAllPosts)
router.post("/", postController.createPost)
router.get("/:id", postController.getPostById),
router.post("/:id/like", postController.likeThePost),

module.exports = router;