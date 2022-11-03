import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/productos', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(`SELECT * FROM producto;`, (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });
});

export default router;
