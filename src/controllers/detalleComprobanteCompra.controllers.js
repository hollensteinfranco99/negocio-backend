//import DetalleCompra from '../models/detalleComprobanteCompra';
const DetalleCompra = require('../models/detalleComprobanteCompra');

const detalleCompraCtrl = {};

detalleCompraCtrl.crearDetalleCompra = async(req, res) => {
    try {
        const nuevoDetalleCompra = new DetalleCompra({
            producto_id: req.body.producto_id,
            pedido_id: req.body.pedido_id,
            nombre_producto: req.body.nombre_producto,
            cantidad: req.body.cantidad,
            precio_unitario: req.body.precio_unitario,
            subtotal: req.body.subtotal,
        });
        await nuevoDetalleCompra.save();
        res.status(201).json({ mensaje: 'OK' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'error al agregar detalle compra' });
    }
}

detalleCompraCtrl.listarDetalleCompras = async(req, res) => {
    const { pedido_id } = req.query;
    try {
        if (pedido_id) {
            const detalles = await DetalleCompra.find({ pedido_id });
            res.status(200).json(detalles);
        } else {

            const arregloDetalleCompra = await DetalleCompra.find();
            res.status(200).json(arregloDetalleCompra);
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'no se pudo enviar la lista de detalle compras' });
    }
}

detalleCompraCtrl.eliminarDetalleCompra = async(req, res) => {
    try {
        await DetalleCompra.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al eliminar' });
    }
}
detalleCompraCtrl.editarDetalleCompra = async(req, res) => {
    try {
        await DetalleCompra.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'Se modifica' })
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al editar' });
    }
}
export default detalleCompraCtrl;