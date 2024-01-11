import mongoose, {Schema} from 'mongoose';

const movimientoSchema = new Schema({
    caja_id: {
        type: Schema.Types.ObjectId,
        required: true 
    },
    descripcion:{
        type: String,
        required: true
    },
    monto:{
        type: Number,
        required: true,
    },
    fechaRegistro:{
        type: String,
        maxlength: 150,
        required:true
    },
    tipoMovimiento:{
        type:Number,
        required:true
    },
    nro_movimiento:{
        type: String,
        required:true
    },
    estado:{
        type: String,
        maxlength: 150,
        required: true,
    },
    pedido_id: {
        type: Schema.Types.ObjectId,
        default: null 
    }
});

const Movimiento = mongoose.model('movimiento', movimientoSchema);

export default Movimiento;