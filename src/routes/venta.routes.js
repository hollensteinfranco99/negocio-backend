//import { Router } from "express";
//import ventaCtrl from "../controllers/venta.controllers";
//const router = Router();
const express = require('express');
const ventaCtrl = require("../controllers/venta.controllers");
const router = express.Router();

router.route('/venta')
    .get(ventaCtrl.listarVentas)
    .post(ventaCtrl.crearVenta);

router.route('/venta/:id')
    .put(ventaCtrl.editarVenta)
    .get(ventaCtrl.obtenerVentaPorId);

//export default router;
module.exports = router;