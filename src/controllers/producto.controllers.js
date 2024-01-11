import Producto from '../models/producto';


const productoCtrl = {};

productoCtrl.crearProducto = async (req, res) =>{
    try {
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            precioVenta: req.body.precioVenta,
            marca: req.body.marca,
            tipoProducto: req.body.tipoProducto,
            codigo: req.body.codigo,
            imagen: req.body.imagen,
            stock: req.body.stock
        });        
        await nuevoProducto.save();
        res.status(201).json({mensaje: 'OK'});

    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'error al agregar producto'});
    }
}

productoCtrl.listarProductos = async (req,res) =>{
    try {
        const arregloProducto = await Producto.find();
        res.status(200).json(arregloProducto);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo enviar la lista de productos'});
    }
}

productoCtrl.eliminarProducto = async (req,res) =>{
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'OK'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'error al eliminar'});
    }
}
productoCtrl.editarProducto = async (req,res) =>{
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'Se modifica'})
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'error al editar'});
    }
}
productoCtrl.obtenerProducto = async (req,res) =>{
    try {
        const productoEncontrado = await Producto.findById(req.params.id);
        res.status(200).json(productoEncontrado);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo obtener el producto'});
    }
}
export default productoCtrl;