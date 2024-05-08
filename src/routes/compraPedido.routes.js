//import { Router } from "express";
//import compraPedidoCtrl from "../controllers/compraPedido.controllers";
//const router = Router();

const express = require('express');
const compraPedidoCtrl = require("../controllers/compraPedido.controllers");
const router = express.Router();

router.route('/compraPedido')
    .get(compraPedidoCtrl.listarCompraPedidos)
    .post(compraPedidoCtrl.crearCompraPedido);

router.route('/compraPedido/:id')
    .delete(compraPedidoCtrl.eliminarCompraPedido)
    .put(compraPedidoCtrl.editarCompraPedido)
    .get(compraPedidoCtrl.obtenerCompraPedido);

router.route('/compraPedidoPorEstado')
    .get(compraPedidoCtrl.listarPedidosPorEstado);


//export default router;
module.exports = router;