import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/productos', {
        })
        console.log('Conectado a la base de datos correctamente')
    }
    catch(err) {
        console.error(err)
    }
}

mongoose.set('strictQuery', false);

connectDB()