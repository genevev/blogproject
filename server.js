/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv';

const PORT = process.env.MY_PORT || 3000;

const app = express();

app.get('/', (req, res) => { 
  res.send('Welcome to Genys API');
});
app.listen(PORT, () => {
  console.log(`server listening on: http://localhost:${PORT}`);
});
