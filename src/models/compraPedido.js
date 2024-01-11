import mongoose, {Schema} from 'mongoose';

const pedidoSchema = new Schema({
    proveedor:{
        type: String,
        maxlength: 150,
        required: true,
    },
    fecha_estimada:{
        type: String,
        required: true
    },
    nro_factura:{
        type: String,
        required: true,
        maxlength: 150
    },
    fecha_registro:{
        type: String,
        maxlength: 150,
        required:true
    },
    subtotal:{
        type:Number,
        required:true
    },
    descuento:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    estado:{
        type: String,
        maxlength: 150,
        required: true,
    }
});

const CompraPedido = mongoose.model('compraPedido', pedidoSchema);

export default CompraPedido;