//import { Router } from "express";
//import detalleVentaCtrl from "../controllers/detalleComprobanteVenta.controllers";
//const router = Router();
const express = require('express');
const detalleVentaCtrl = require("../controllers/detalleComprobanteVenta.controllers");
const router = express.Router();


router.route('/detalleComprobanteVenta')
    .get(detalleVentaCtrl.listarDetalleVentas)
    .post(detalleVentaCtrl.crearDetalleVenta);

router.route('/detalleComprobanteVenta/:id')
    .delete(detalleVentaCtrl.eliminarDetalleVenta)
    .put(detalleVentaCtrl.editarDetalleVenta)

//export default router;
module.exports = router;