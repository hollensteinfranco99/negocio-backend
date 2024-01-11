import mongoose, {Schema} from 'mongoose';

const ventaSchema = new Schema({
    tipo_comprobante:{
        type: String,
        required: true,
    },
    fecha_registro:{
        type: String,
        required: true
    },
    nro_factura:{
        type: String,
        required: true,
        maxlength: 150
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
    },
    movimiento_id:{
        type: Schema.Types.ObjectId,
        default: null 
    }
});

const Venta = mongoose.model('venta', ventaSchema);

export default Venta;