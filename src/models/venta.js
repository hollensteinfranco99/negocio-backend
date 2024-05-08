//import mongoose, {Schema} from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ventaSchema = new Schema({
    tipo_comprobante: {
        type: String,
    },
    fecha_registro: {
        type: String,
    },
    nro_factura: {
        type: String,
        maxlength: 150
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
    },
    movimiento_id: {
        type: Schema.Types.ObjectId,
        default: null
    }
});

const Venta = mongoose.model('venta', ventaSchema);

//export default Venta;
module.exports = Venta;