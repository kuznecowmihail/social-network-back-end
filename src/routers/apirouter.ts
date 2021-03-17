import express from 'express';
import dialogRouter from './dialogrouter';
import userRouter from './userrouter';
import messageRouter from './messagerouter';
import postRouter from './postrouter';

const router = express.Router();
router.use('/dialogs', dialogRouter);
router.use('/users', userRouter);
router.use('/messages', messageRouter);
router.use('/posts', postRouter);

export default router