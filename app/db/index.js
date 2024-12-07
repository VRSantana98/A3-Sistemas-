import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config();

const pool = createPool({
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER
});

const connectToDatabase = async() => {
    try {
        await pool.getConnection();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.log("Erro ao conectar banco de dados!");
        console.log(error);
        throw error;
        
        
    }
};

export { connectToDatabase, pool };