//import { Router } from "express";
//import cajaCtrl from "../controllers/caja.controllers";
//const router = Router();

const express = require('express');
const cajaCtrl = require('../controllers/caja.controllers');
const router = express.Router();

router.route('/caja')
    .get(cajaCtrl.listarCajas)
    .post(cajaCtrl.crearCaja);

router.route('/caja/:id')
    .delete(cajaCtrl.eliminarCaja)
    .put(cajaCtrl.editarCaja)
    .get(cajaCtrl.obtenerCaja);

//export default router;
module.exports = router;