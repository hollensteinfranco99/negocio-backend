import Venta from '../models/venta';


const ventaCtrl = {};

ventaCtrl.crearVenta = async (req, res) =>{
    try {
        const nuevaVenta = new Venta({
            tipo_comprobante: req.body.tipo_comprobante,
            fecha_registro:req.body.fecha_registro,
            nro_factura:req.body.nro_factura,
            subtotal:req.body.subtotal,
            descuento:req.body.descuento,
            total:req.body.total,
            estado:req.body.estado,
            movimiento_id:req.body.movimiento_id
        });        
        await nuevaVenta.save();
        res.status(201).json({mensaje: 'OK'});

    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'error al agregar producto'});
    }
}

ventaCtrl.listarVentas = async (req,res) =>{
    try {
        const arregloVenta = await Venta.find();
        res.status(200).json(arregloVenta);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo enviar la lista de ventas'});
    }
}
ventaCtrl.editarVenta = async (req,res) =>{
    try {
        await Venta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'Se modifica'})
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'error al editar'});
    }
}
ventaCtrl.obtenerVentaPorId = async (req,res) =>{
    try {
        const ventaEncontrada = await Venta.findById(req.params.id);
        res.status(200).json(ventaEncontrada);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo obtener la venta'});
    }
}
export default ventaCtrl;