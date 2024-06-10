import colors from 'colors'
import express from "express";
import router from "./routes";
import db from "./config/db";

// Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue.bold( 'Conexion exitosa a la BD'))
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold( 'Error al conectar a la BD'))
    }
}

connectDB()
const server = express()

server.use('/api/products', router)



export default server