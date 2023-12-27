import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombre:{
        type: String,
        maxlength: 150,
        required: true,
        unique:true,
    },
    precio:{
        type: Number,
        required: true
    },
    marca:{
        type: String,
        required: true,
        unique: true,
        maxlength: 150
    },
    tipoProducto:{
        type: String,
        unique: true,
        maxlength: 150,
        required:true
    },
    imagen:{
        data: Buffer
    },
    codigo:{
        type:Number,
        unique:true,
        required:true
    },
    codigoBarra:{
        type:Number,
        unique:true,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;