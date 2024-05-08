//import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const cajaSchema = new Schema({
    fecha_apertura: {
        type: String,
    },
    fecha_cierre: {
        type: String,
    },
    monto_cierre: {
        type: Number,
    },
    monto_apertura: {
        type: Number,
    },
    monto_total: {
        type: String,
    },
    diferencia: {
        type: Number,
    },
    nro_caja: {
        type: String,
    },
    estado_caja: {
        type: String,
    }
});

const Caja = mongoose.model('caja', cajaSchema);

export default Caja;