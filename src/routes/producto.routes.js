import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

router.route('/')
.get(productoCtrl.listarProductos)
.post(productoCtrl.crearProducto);

router.route('/:id')
.delete(productoCtrl.eliminarProducto)
.put(productoCtrl.editarProducto)
.get(productoCtrl.obtenerProducto);

export default router;