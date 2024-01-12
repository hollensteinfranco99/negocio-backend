import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import productoRoutes from './routes/producto.routes';
import ventaRoutes from './routes/venta.routes'
import compraPedidoRoutes from './routes/compraPedido.routes';
import detalleCompraRoutes from './routes/detalleComprobanteCompra.routes';
import caja from './routes/caja.routes';
import detalleVentaRoutes from './routes/detalleComprobanteVenta.routes';
import movimiento from './routes/movimiento.routes';

// Configuracion
// Crear instancia de express
const app = express();

app.set('port',process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log("Estoy en el puerto "+app.get('port'));
});

// Herramientas extras
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"../public")));

app.use('/api/puntoDeVenta',productoRoutes);
app.use('/api/puntoDeVenta',ventaRoutes);
app.use('/api/puntoDeVenta',compraPedidoRoutes);
app.use('/api/puntoDeVenta',detalleCompraRoutes);
app.use('/api/puntoDeVenta',detalleVentaRoutes);
app.use('/api/puntoDeVenta',movimiento);
app.use('/api/puntoDeVenta',caja);