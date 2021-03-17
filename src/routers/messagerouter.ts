import express from 'express';
import messages from '../data/messages';

const getMessagesHandler = (req: express.Request, res: express.Response) => {
    let dialogid = parseInt(req.params && req.params.dialogid);
    res.setHeader('Access-Control-Allow-Origin', '*');
    let dialogMessages = messages
        .filter(message => message.dialogId === dialogid)
        .map(message => {
            message.direction = message.userId === 0
                ? 'me'
                : 'companion';
            return message;
        });
    let obj = {messages: dialogMessages};
    console.log('get messages');
    console.log(obj);
    res.send(obj);
};
const router = express.Router();
router.get('/:dialogid', getMessagesHandler);

export default router;