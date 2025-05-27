import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Загрузка переменных окружения
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Базовый маршрут
app.get('/', (req, res) => {
  res.json({ message: 'Multipad API is running' });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 