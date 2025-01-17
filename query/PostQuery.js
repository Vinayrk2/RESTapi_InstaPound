
const postQueries = {
    getAll: `SELECT * FROM public."Post";`,
    getPostById: `SELECT * FROM public."Post" WHERE "id" = $1`,
    getByUser: `SELECT * FROM public."Post" WHERE "Post_by" = $1`,
    updatePostData: `UPDATE public."Post" SET "Title" = $1, "Caption" = $2 WHERE "id" = $3 `,
    updateLikes: `UPDATE public."Post" SET "Likes" = "Likes" + 1 WHERE "id" = $1`,
    deletePost: `DELETE FROM public."Post" WHERE "id" = $1`,
    createPost: `INSERT INTO public."Post" ( "Title", "Caption", "Content", "Post_by", "Posted_at") VALUES ($1, $2, $3, $4, $5)`,
}

module.exports = {postQueries}