//import mongoose, {Schema} from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const detalleComprobanteVentaSchema = new Schema({
    producto_id: {
        type: Schema.Types.ObjectId,
    },
    venta_id: {
        type: Schema.Types.ObjectId,
    },
    nombre_producto: {
        type: String,
    },
    cantidad: {
        type: String,
    },
    precio_unitario: {
        type: String,
    },
    subtotal: {
        type: String,
    },
});

const DetalleVenta = mongoose.model('detalleComprobanteVenta', detalleComprobanteVentaSchema);

export default DetalleVenta;