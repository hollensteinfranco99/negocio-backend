import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

router.route('/producto')
.get(productoCtrl.listarProductos)
.post(productoCtrl.crearProducto);

router.route('/producto/:id')
.delete(productoCtrl.eliminarProducto)
.put(productoCtrl.editarProducto)
.get(productoCtrl.obtenerProducto);

router.route('/productoPorCodigo')
.get(productoCtrl.obtenerProductoPorCodigo)


export default router;