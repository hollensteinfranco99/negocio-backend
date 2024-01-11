import mongoose, {Schema} from 'mongoose';

const cajaSchema = new Schema({
    fecha_apertura: {
        type: String,
        required: true,
    },
    fecha_cierre: {
        type: String,
        required: true,
    },
    monto_cierre:{
        type: Number,
    },
    monto_apertura:{
        type: Number,
    },
    monto_total:{
        type: String,
        required: true,
    },
    diferencia:{
        type: Number,
    },
    nro_caja:{
        type: String,
        required:true
    },
    estado_caja:{
        type: String,
        required:true
    }
});

const Caja = mongoose.model('caja', cajaSchema);

export default Caja;