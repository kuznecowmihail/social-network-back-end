import express from 'express';
import dialogRouter from './dialogrouter';
import userRouter from './userrouter';
import followRouter from './followrouter';
import messageRouter from './messagerouter';
import postRouter from './postrouter';
import authRouter from './authrouter';

const router = express.Router();
router.use('/dialogs', dialogRouter);
router.use('/users', userRouter);
router.use('/follow', followRouter);
router.use('/messages', messageRouter);
router.use('/posts', postRouter);
router.use('/auth', authRouter);

export default router