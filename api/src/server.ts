import express from 'express';
import authRoutes from './routes/authRoutes';
import booksRoutes from './routes/bookRoutes'

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: '*',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],               
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use('/api', authRoutes);
app.use('/api', booksRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});