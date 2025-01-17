const express = require("express");
const UserController = require("../controller/UserController")

const router = express.Router();

router.get("/:id", UserController.getUserById)
router.get("/", UserController.getAllUsers)
router.post("/", UserController.createUser)
router.put("/:id", UserController.updateUserData)
router.delete("/:id", UserController.deleteUser)

module.exports = router;