import express from 'express';
import getApiRouter from './routers';

let app = express();
app.use('/api/1.0', getApiRouter());
app.listen(3001);