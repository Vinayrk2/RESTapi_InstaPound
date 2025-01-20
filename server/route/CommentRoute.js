const express = require("express");
const router = express.Router()
const Comments = require("../controller/CommentController")

router.get("/:id", Comments.getCommentsByPost)
router.get("/user/:id", Comments.getCommentsByUser)
router.delete("/:id", Comments.removeComment)
router.post("/:id", Comments.createComment)


module.exports = router;