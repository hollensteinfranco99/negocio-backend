import { Router } from "express";
import detalleVentaCtrl from "../controllers/detalleComprobanteVenta.controllers";

const router = Router();

router.route('/detalleComprobanteVenta')
.get(detalleVentaCtrl.listarDetalleVentas)
.post(detalleVentaCtrl.crearDetalleVenta);

router.route('/detalleComprobanteVenta/:id')
.delete(detalleVentaCtrl.eliminarDetalleVenta)
.put(detalleVentaCtrl.editarDetalleVenta)
.get(detalleVentaCtrl.obtenerDetalleVenta);

export default router;