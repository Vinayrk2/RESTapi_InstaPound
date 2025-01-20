require("dotenv").config()
const {Pool} = require("pg")

let pool;

const dbConnection = async () => {
    
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    await pool.connect();
}

try {
    dbConnection();
    console.log("database connected")
} catch (err) {
    console.log(err.stack)
    process.exit(-1)
}


module.exports = {pool};