//import { Router } from "express";
//import movimientoCtrl from "../controllers/movimiento.controllers";
//const router = Router();
const express = require('express');
const movimientoCtrl = require("../controllers/movimiento.controllers");
const router = express.Router();

router.route('/movimiento')
    .get(movimientoCtrl.listarMovimientos)
    .post(movimientoCtrl.crearMovimiento);

router.route('/movimiento/:id')
    .delete(movimientoCtrl.eliminarMovimiento)
    .put(movimientoCtrl.editarMovimiento)
    .get(movimientoCtrl.obtenerMovimiento);

router.route('/movimientoDescripcion')
    .get(movimientoCtrl.obtenerMovimientoPorDescripcion);

router.route('/movimientoTipo')
    .get(movimientoCtrl.obtenerMovimientoPorTipo);

//export default router;
module.exports = router;