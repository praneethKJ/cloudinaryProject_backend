import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectToMongo } from './db.js';
import uploadRoutes from './routes/upload.js';

const app = express();
app.use(cors());
connectToMongo();

const port = process.env.PORT || 5000;
app.use(express.json());

// Routes for uploading and playing videos
app.use('/api/upload', uploadRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});