import { Router } from "express";
import cajaCtrl from "../controllers/caja.controllers";

const router = Router();

router.route('/caja')
.get(cajaCtrl.listarCajas)
.post(cajaCtrl.crearCaja);

router.route('/caja/:id')
.delete(cajaCtrl.eliminarCaja)
.put(cajaCtrl.editarCaja)
.get(cajaCtrl.obtenerCaja);

export default router;