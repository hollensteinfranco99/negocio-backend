//import CompraPedido from '../models/compraPedido';
const CompraPedido = require('../models/compraPedido');


const compraPedidoCtrl = {};

compraPedidoCtrl.crearCompraPedido = async(req, res) => {
    try {
        const nuevoCompraPedido = new CompraPedido({
            proveedor: req.body.proveedor,
            fecha_estimada: req.body.fecha_estimada,
            nro_factura: req.body.nro_factura,
            fecha_registro: req.body.fecha_registro,
            subtotal: req.body.subtotal,
            total: req.body.total,
            descuento: req.body.descuento,
            estado: req.body.estado
        });

        const pedidoGuardado = await nuevoCompraPedido.save();


        res.status(201).json({ mensaje: 'OK', pedido: pedidoGuardado });

    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'error al agregar pedido' });
    }
}
compraPedidoCtrl.listarPedidosPorEstado = async(req, res) => {
    const { estado } = req.query;

    try {
        const consulta = { estado: estado || 'EN PROCESO' };
        const pedidos = await CompraPedido.find(consulta);
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

compraPedidoCtrl.listarCompraPedidos = async(req, res) => {
    const { q } = req.query;

    try {
        if (q) {
            const pedidos = await CompraPedido.find({
                $or: [
                    { proveedor: { $regex: new RegExp(q, 'i') } },
                    { nro_factura: { $regex: new RegExp(q, 'i') } },
                ],
            });
            res.status(200).json(pedidos);
        } else {
            const arregloPedidos = await CompraPedido.find();
            res.status(200).json(arregloPedidos);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};
compraPedidoCtrl.eliminarCompraPedido = async(req, res) => {
    try {
        await CompraPedido.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al eliminar' });
    }
}
compraPedidoCtrl.editarCompraPedido = async(req, res) => {
    try {
        await CompraPedido.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'Se modifica' })
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'error al editar' });
    }
}
compraPedidoCtrl.obtenerCompraPedido = async(req, res) => {
        try {
            const compraPedidoEncontrado = await CompraPedido.findById(req.params.id);
            res.status(200).json(compraPedidoEncontrado);

        } catch (error) {
            console.log(error);
            res.status(404).json({ mensaje: 'no se pudo obtener el pedido' });
        }
    }
    //export default compraPedidoCtrl;
module.exports = compraPedidoCtrl;