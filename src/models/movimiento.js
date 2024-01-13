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
    },
    tipoMovimiento:{
        type:String,
    },
    nro_movimiento:{
        type: String,
    },
    estado:{
        type: String,
        maxlength: 150,
    },
    pedido_id: {
        type: Schema.Types.ObjectId,
        default: null 
    }
});

const Movimiento = mongoose.model('movimiento', movimientoSchema);

export default Movimiento;