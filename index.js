// import express from 'express';
// // import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();
// import { connectToMongo } from './db.js';
// import uploadRoutes from './routes/upload.js';
// // import  enableCORS  from './middleware.js';
// // Call the function to connect to MongoDB
// connectToMongo();

// const app = express();
// const port = process.env.PORT || 5000;
// const corsOptions = {
//   origin: ("Access-Control-Allow-origin","https://bespoke-gecko-c7e64a.netlify.app/"),
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(corsOptions);
// app.use(express.json());
// // Routes for uploading and playing videos
// app.use('/api/upload', uploadRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectToMongo } from './db.js';
import uploadRoutes from './routes/upload.js';
// Call the function to connect to MongoDB
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: ("Access-Control-Allow-origin","https://bespoke-gecko-c7e64a.netlify.app/"),
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes for uploading and playing videos
app.use('/api/upload', uploadRoutes);
// app.use('/api/play', require('./routes/play'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});