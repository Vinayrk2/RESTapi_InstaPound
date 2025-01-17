
const userQueries = {
    getAll: `SELECT * FROM public."Users";`,
    getUserById: `SELECT * FROM public."Users" WHERE "id" = $1`,
    getByUserName: `SELECT * FROM public."Users" WHERE "Username" = $1`,
    updateUserData: `UPDATE public."Users" SET "Username" = $1, "Name" = $2 WHERE "id" = $3`,
    updatePassword: `UPDATE public."Users" SET "Password" = $1 WHERE "id" = $2`,
    deleteUser: `DELETE FROM public."Users" WHERE "id" = $1`,
    createUser: `INSERT INTO public."Users" ( "Name", "Email", "Username", "Password") VALUES ($1, $2, $3, $4)`,
}

module.exports = {userQueries}