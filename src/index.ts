import express from 'express';
import apiRouter from './routers/apirouter';

let app = express();
app.use('/api/1.0', apiRouter);
app.listen(3001);