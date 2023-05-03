import express from 'express';
import config from './config.js';

const app = express();


//settings
app.set('PORT', config.PORT);


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

export default app;