import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/api/productos', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo INNER JOIN producto_deposito ON producto.id = producto_deposito.id_producto INNER JOIN deposito ON producto_deposito.id_deposito = deposito.id_deposito ORDER BY id;`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

router.get('/api/productos/filtro/carro', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto  INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo WHERE tipo_activo.nombre_activo = 'Carro';`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

router.get('/api/productos/filtro/camioneta', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto  INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo WHERE tipo_activo.nombre_activo = 'Camioneta';`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});
router.get('/api/productos/filtro/jovenes', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo INNER JOIN producto_deposito ON producto.id = producto_deposito.id_producto INNER JOIN deposito ON producto_deposito.id_deposito = deposito.id_deposito INNER JOIN producto_segmento ON producto.id = producto_segmento.id_producto INNER JOIN segmentos ON producto_segmento.id_segmento = segmentos.id_segmento WHERE segmentos.nombre = 'Jovenes' ORDER BY id;`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

router.get('/api/productos/filtro/standard', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo INNER JOIN producto_deposito ON producto.id = producto_deposito.id_producto INNER JOIN deposito ON producto_deposito.id_deposito = deposito.id_deposito INNER JOIN producto_segmento ON producto.id = producto_segmento.id_producto INNER JOIN segmentos ON producto_segmento.id_segmento = segmentos.id_segmento WHERE segmentos.nombre = 'Standard' ORDER BY id;`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

router.get('/api/productos/filtro/premium', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo INNER JOIN producto_deposito ON producto.id = producto_deposito.id_producto INNER JOIN deposito ON producto_deposito.id_deposito = deposito.id_deposito INNER JOIN producto_segmento ON producto.id = producto_segmento.id_producto INNER JOIN segmentos ON producto_segmento.id_segmento = segmentos.id_segmento WHERE segmentos.nombre = 'Premium' ORDER BY id;`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

router.get('/api/productos/filtro/hipotecario', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo INNER JOIN producto_deposito ON producto.id = producto_deposito.id_producto INNER JOIN deposito ON producto_deposito.id_deposito = deposito.id_deposito WHERE tipo_producto.nombre = 'Prestamo Hipotecario';`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

router.get('/api/productos/filtro/automotor', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo INNER JOIN producto_deposito ON producto.id = producto_deposito.id_producto INNER JOIN deposito ON producto_deposito.id_deposito = deposito.id_deposito WHERE tipo_producto.nombre = 'Prestamo Automotor';`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

router.get('/api/productos/filtro/vista', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        `SELECT * FROM producto INNER JOIN tipo_producto ON producto.tproducto_id = tipo_producto.id_t_producto INNER JOIN producto_prestamo ON producto.id = producto_prestamo.id_producto INNER JOIN prestamo ON producto_prestamo.id_prestamo = prestamo.id_prestamo INNER JOIN tipo_activo ON prestamo.activo_id = tipo_activo.id_activo INNER JOIN producto_deposito ON producto.id = producto_deposito.id_producto INNER JOIN deposito ON producto_deposito.id_deposito = deposito.id_deposito WHERE tipo_producto.nombre = 'Cuentas Vista';`,
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

export default router;
