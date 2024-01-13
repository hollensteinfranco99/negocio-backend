import mongoose from 'mongoose';

const url = 'mongodb+srv://hollensteinfranco99:Pucho2020.@francohollenstein99.gwr3wbe.mongodb.net/puntoDeVenta';
//const url = 'mongodb://127.0.0.1:27017/KioskoDB';
        mongoose.connect(url);
        const connection = mongoose.connection;

        connection.once('open', () => {
            console.log("¡Conexión exitosa!");
        });

        connection.on('error', (err) => {
            console.error("Error de conexión:", err);
        });


