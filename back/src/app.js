import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productosRoutes from './routes/index.routes.js';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(productosRoutes);

const port = process.env.PORT || 3050;
app.listen(port, () => console.log(`Server running on port ${port}`));
