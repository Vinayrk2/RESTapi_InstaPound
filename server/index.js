const express = require("express");
const app = express();
const pool = require("./db");
const UserRouter = require("./route/UserRoute")
const PostRouter = require("./route/PostRoute")
const CommentRouter = require("./route/CommentRoute")

app.use(express.json())
app.use("/user", UserRouter)
app.use("/post", PostRouter)
app.use("/comment", CommentRouter)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log("server started at : http://localhost:3000/")
})