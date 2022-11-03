import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productosRoutes from './routes/index.routes.js';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(productosRoutes);

app.listen(3050);
console.log('Server running on port 3050');
