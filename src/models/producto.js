import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombre:{
        type: String,
        maxlength: 150,
        required: true,
    },
    precioVenta:{
        type: Number,
        required: true
    },
    marca:{
        type: String,
        required: true,
        maxlength: 150
    },
    tipoProducto:{
        type: String,
        maxlength: 150,
        required:true
    },
    imagen:{
        data: Buffer
    },
    codigo:{
        type:String,
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