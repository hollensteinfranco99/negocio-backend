import Caja from '../models/caja';


const cajaCtrl = {};

cajaCtrl.crearCaja = async (req, res) =>{
    try {
        const nuevoCaja = new Caja({
            fecha_apertura: req.body.fecha_apertura,
            fecha_cierre: req.body.fecha_cierre,
            monto_cierre: req.body.monto_cierre,
            monto_apertura: req.body.monto_apertura,
            monto_total: req.body.monto_total,
            diferencia: req.body.diferencia,
            nro_caja: req.body.nro_caja,
            estado_caja: req.body.estado_caja
        });        
        await nuevoCaja.save();
        res.status(201).json({mensaje: 'OK'});

    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'error al agregar caja'});
    }
}

cajaCtrl.listarCajas = async (req,res) =>{
    try {
        const arregloCaja = await Caja.find().sort({ nro_caja: 'desc' });
        res.status(200).json(arregloCaja);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo enviar la lista de cajas'});
    }
}

cajaCtrl.eliminarCaja = async (req,res) =>{
    try {
        await Caja.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'OK'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'error al eliminar'});
    }
}
cajaCtrl.editarCaja = async (req,res) =>{
    try {
        await Caja.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'Se modifica'})
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'error al editar'});
    }
}
cajaCtrl.obtenerCaja = async (req,res) =>{
    try {
        const cajaEncontrado = await Caja.findById(req.params.id);
        res.status(200).json(cajaEncontrado);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'no se pudo obtener el caja'});
    }
}
export default cajaCtrl;