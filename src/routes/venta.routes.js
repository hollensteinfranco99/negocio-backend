import { Router } from "express";
import ventaCtrl from "../controllers/venta.controllers";

const router = Router();

router.route('/venta')
.get(ventaCtrl.listarVentas)
.post(ventaCtrl.crearVenta);

router.route('/venta/:id')
.put(ventaCtrl.editarVenta)
.get(ventaCtrl.obtenerVentaPorId);

export default router;