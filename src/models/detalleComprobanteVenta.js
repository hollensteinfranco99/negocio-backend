import mongoose, {Schema} from 'mongoose';

const detalleComprobanteVentaSchema = new Schema({
    producto_id: {
        type: Schema.Types.ObjectId,
        required: true 
    },
    venta_id: {
        type: Schema.Types.ObjectId,
        required: true 
    },
    nombre_producto:{
        type: String,
        required: true,
    },
    cantidad:{
        type: String,
        required: true,
    },
    precio_unitario:{
        type: String,
        required: true,
    },
    subtotal:{
        type: String,
        required:true
    },
});

const DetalleVenta = mongoose.model('detalleComprobanteVenta', detalleComprobanteVentaSchema);

export default DetalleVenta;