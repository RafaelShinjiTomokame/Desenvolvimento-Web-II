import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import megaRoutes from './routes/mega';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(Number(PORT), function() {
    console.log(`Rodando em http://localhost:${PORT}`);
});

app.use(megaRoutes);