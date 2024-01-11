import { Router } from "express";
import compraPedidoCtrl from "../controllers/compraPedido.controllers";

const router = Router();

router.route('/compraPedido')
.get(compraPedidoCtrl.listarCompraPedidos)
.post(compraPedidoCtrl.crearCompraPedido);

router.route('/compraPedido/:id')
.delete(compraPedidoCtrl.eliminarCompraPedido)
.put(compraPedidoCtrl.editarCompraPedido)
.get(compraPedidoCtrl.obtenerCompraPedido);

export default router;