import mongoose, {Schema} from 'mongoose';

const detalleComprobanteCompraSchema = new Schema({
    producto_id: {
        type: Schema.Types.ObjectId,
    },
    pedido_id: {
        type: Schema.Types.ObjectId,
    },
    nombre_producto:{
        type: String,
    },
    cantidad:{
        type: String,
    },
    precio_unitario:{
        type: String,
    },
    subtotal:{
        type: String,
    },
});

const DetalleCompra = mongoose.model('detalleComprobanteCompra', detalleComprobanteCompraSchema);

export default DetalleCompra;