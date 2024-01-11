import mongoose, {Schema} from 'mongoose';

const detalleComprobanteCompraSchema = new Schema({
    producto_id: {
        type: Schema.Types.ObjectId,
        required: true 
    },
    pedido_id: {
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

const DetalleCompra = mongoose.model('detalleComprobanteCompra', detalleComprobanteCompraSchema);

export default DetalleCompra;