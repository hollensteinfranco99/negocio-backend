import Producto from '../models/producto';


const productoCtrl = {};

productoCtrl.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            precioVenta: req.body.precioVenta,
            marca: req.body.marca,
            tipoProducto: req.body.tipoProducto,
            codigo: req.body.codigo,
            stock: req.body.stock,
            permitirStockNegativo: req.body.permitirStockNegativo
        });
        await nuevoProducto.save();
        res.status(201).json({ mensaje: 'OK' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'error al agregar producto' });
    }
}
productoCtrl.obtenerProductoPorCodigo = async (req, res) => {
    const { codigo } = req.query;

    try {
        if(codigo){
            const producto = await Producto.findOne({ codigo: codigo });
            res.status(200).json(producto);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};
productoCtrl.listarProductos = async (req, res) => {
    const { codigo_like, nombre_like } = req.query;

    try {
        if (codigo_like) {
            // Lógica para cargar por código
            const producto = await Producto.find({ codigo: { $regex: new RegExp(codigo_like, 'i') } });

            if (producto) {
                res.status(200).json(producto);
            } else {
                res.status(404).json({ mensaje: 'Producto no encontrado' });
            }
        } else if (nombre_like) {
            // Lógica para cargar por nombre
            const productosPorNombre = await Producto.find({ nombre: { $regex: new RegExp(nombre_like, 'i') } });
            res.status(200).json(productosPorNombre);
        } else {
            // Lógica para listar todos los productos
            const arregloProducto = await Producto.find();
            res.status(200).json(arregloProducto);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

productoCtrl.eliminarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al eliminar' });
    }
}
productoCtrl.editarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'Se modifica' })
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al editar' });
    }
}
productoCtrl.obtenerProducto = async (req, res) => {
    try {
        const productoEncontrado = await Producto.findById(req.params.id);
        res.status(200).json(productoEncontrado);

    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'no se pudo obtener el producto' });
    }
}
export default productoCtrl;