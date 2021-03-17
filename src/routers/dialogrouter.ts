import express from 'express';
import users from '../data/users';
import dialogs from '../data/dialogs';
import messages from '../data/messages';

const getDialogsHandler = (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let customDialogs = dialogs.map(item => {
        let id = item.id;
        let dialogMessages = messages.filter(message => message.dialogId === id);
        let lastMessage = dialogMessages.length && dialogMessages[dialogMessages.length - 1].message;
        let userId = dialogMessages.filter(message => message.userId !== 0)[0].userId;
        let user = users.filter(user => user.id === userId)[0];
        return {
            id: id,
            name: user.name,
            img: user.img,
            lastMessage: lastMessage
        }
    })
    let obj = {dialogs: customDialogs};
    console.log('get dialogs');
    console.log(obj);
    res.send(obj);
};
const router = express.Router();
router.get('/', getDialogsHandler);

export default router;