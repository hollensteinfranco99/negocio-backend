//import mongoose, {Schema} from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const pedidoSchema = new Schema({
    proveedor: {
        type: String,
        maxlength: 150,
    },
    fecha_estimada: {
        type: String,
    },
    nro_factura: {
        type: String,
        maxlength: 150
    },
    fecha_registro: {
        type: String,
        maxlength: 150,
    },
    subtotal: {
        type: Number,
    },
    descuento: {
        type: Number,
    },
    total: {
        type: Number,
    },
    estado: {
        type: String,
        maxlength: 150,
    }
});

const CompraPedido = mongoose.model('compraPedido', pedidoSchema);

export default CompraPedido;