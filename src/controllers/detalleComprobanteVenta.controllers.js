import DetalleVenta from '../models/detalleComprobanteVenta';


const detalleVentaCtrl = {};

detalleVentaCtrl.crearDetalleVenta = async (req, res) => {
    try {
        const nuevoDetalleVenta = new DetalleVenta({
            producto_id: req.body.producto_id,
            venta_id: req.body.venta_id,
            nombre_producto: req.body.nombre_producto,
            cantidad: req.body.cantidad,
            precio_unitario: req.body.precio_unitario,
            subtotal: req.body.subtotal,
        });
        await nuevoDetalleVenta.save();
        res.status(201).json({ mensaje: 'OK' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'error al agregar detalle venta' });
    }
}

detalleVentaCtrl.listarDetalleVentas = async (req, res) => {
    try {
        const arregloDetalleVenta = await DetalleVenta.find();
        res.status(200).json(arregloDetalleVenta);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'no se pudo enviar la lista de detalle ventas' });
    }
}

detalleVentaCtrl.eliminarDetalleVenta = async (req, res) => {
    try {
        await DetalleVenta.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al eliminar' });
    }
}
detalleVentaCtrl.editarDetalleVenta = async (req, res) => {
    try {
        await DetalleVenta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'Se modifica' })
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al editar' });
    }
}
detalleVentaCtrl.obtenerDetalleVenta = async (req, res) => {
    try {
        const detalleVentaEncontrado = await DetalleVenta.findById(req.params.id);
        res.status(200).json(detalleVentaEncontrado);

    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'no se pudo obtener el detalleVenta' });
    }
}
export default detalleVentaCtrl;