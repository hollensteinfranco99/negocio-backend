//import { Router } from "express";
//import detalleCompraCtrl from "../controllers/detalleComprobanteCompra.controllers";
//const router = Router();

const express = require('express');
const detalleCompraCtrl = require("../controllers/detalleComprobanteCompra.controllers");
const router = express.Router();

router.route('/detalleComprobanteCompra')
    .get(detalleCompraCtrl.listarDetalleCompras)
    .post(detalleCompraCtrl.crearDetalleCompra);

router.route('/detalleComprobanteCompra/:id')
    .delete(detalleCompraCtrl.eliminarDetalleCompra)
    .put(detalleCompraCtrl.editarDetalleCompra)

//export default router;
module.exports = router;