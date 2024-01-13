import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombre:{
        type: String,
        maxlength: 150,
    },
    precioVenta:{
        type: Number,
    },
    marca:{
        type: String,
        maxlength: 150
    },
    tipoProducto:{
        type: String,
        maxlength: 150,
    },
    codigo:{
        type:String,
        unique:true,
    },
    stock:{
        type:Number,
    },
    permitirStockNegativo:{
        type:Boolean
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;