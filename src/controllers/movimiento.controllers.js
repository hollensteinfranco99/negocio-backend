import Movimiento from '../models/movimiento';


const movimientoCtrl = {};

movimientoCtrl.crearMovimiento = async (req, res) =>{
    try {
        const nuevoMovimiento = new Movimiento({
            caja_id: req.body.caja_id,
            descripcion: req.body.descripcion,
            monto: req.body.monto,
            fechaRegistro: req.body.fechaRegistro,
            tipoMovimiento: req.body.tipoMovimiento,
            nro_movimiento: req.body.nro_movimiento,
            estado: req.body.estado,
            pedido_id: req.body.pedido_id
        });        
        await nuevoMovimiento.save();
        res.status(201).json({mensaje: 'OK'});

    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'error al agregar movimiento'});
    }
}

movimientoCtrl.listarMovimientos = async (req,res) =>{
    try {
        const arregloMovimiento = await Movimiento.find();
        res.status(200).json(arregloMovimiento);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo enviar la lista de movimientos'});
    }
}

movimientoCtrl.eliminarMovimiento = async (req,res) =>{
    try {
        await Movimiento.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'OK'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'error al eliminar'});
    }
}
movimientoCtrl.editarMovimiento = async (req,res) =>{
    try {
        await Movimiento.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'Se modifica'})
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'error al editar'});
    }
}
movimientoCtrl.obtenerMovimiento = async (req,res) =>{
    try {
        const movimientoEncontrado = await Movimiento.findById(req.params.id);
        res.status(200).json(movimientoEncontrado);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo obtener el movimiento'});
    }
}
export default movimientoCtrl;