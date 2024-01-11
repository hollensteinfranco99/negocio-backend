import { Router } from "express";
import movimientoCtrl from "../controllers/movimiento.controllers";

const router = Router();

router.route('/movimiento')
.get(movimientoCtrl.listarMovimientos)
.post(movimientoCtrl.crearMovimiento);

router.route('/movimiento/:id')
.delete(movimientoCtrl.eliminarMovimiento)
.put(movimientoCtrl.editarMovimiento)
.get(movimientoCtrl.obtenerMovimiento);

export default router;