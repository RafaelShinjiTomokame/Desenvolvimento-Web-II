import express from 'express';
import cors from 'cors';
import cidadeRoutes from './routes/mainRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(cidadeRoutes);

export default app;