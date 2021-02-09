import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import MainRoute from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

MainRoute.runApp(app);

export default app;