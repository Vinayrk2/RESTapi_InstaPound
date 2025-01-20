
const commentQueries = {
    getByUserId: `SELECT * FROM public."Comments" WHERE "By" = $1 ORDER BY "id" OFFSET $2 LIMIT 15`,
    getByPostId: `SELECT * FROM public."Comments" WHERE "Post_id" = $1 ORDER BY "id" OFFSET $2 LIMIT 15`,
    getTotal: `SELECT COUNT(*) AS "count" FROM public."Comments" WHERE "id" = $1`,
    deleteComment: `DELETE FROM public."Comments" WHERE "id" = $1`,
    createComment: `INSERT INTO public."Comments" ("By", "Post_id", "Message") VALUES ($1, $2, $3)`,
}

module.exports = {commentQueries}