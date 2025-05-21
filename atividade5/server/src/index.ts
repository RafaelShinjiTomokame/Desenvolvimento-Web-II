import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mega from './routes/mega';

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});

app.use(mega);