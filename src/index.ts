import express from 'express';
import apiRouter from './routers/apirouter';
import cookieParser from 'cookie-parser';

let app = express();
app.use(cookieParser());
app.use('/api/1.0', apiRouter);
app.listen(3001);