import express from 'express';
import users from './data/users';
import messages from './data/messages';
import dialogs from './data/dialogs';

const countRecordOfPage = 3;
const getApiRouter = () : express.Router => {
    let router = express.Router();
    router.get('/users/:page', getUsersHandler);
    router.get('/users/all', getAllUsersHandler);
    router.get('/dialogs', getDialogsHandler);
    router.get('/messages/:dialogid', getMessagesHandler);
    return router
};
const getUsersHandler = (req: express.Request, res: express.Response) => {
    let page = parseInt(req.params && req.params.page);
    let firstIndex = countRecordOfPage * page;
    let lastIndex = countRecordOfPage * page + countRecordOfPage - 1;
    let filterUsers = users.filter((item, index) => {
        if(index >= firstIndex && index <= lastIndex) {
            return true;
        }
        return false;
    })
    res.setHeader('Access-Control-Allow-Origin', '*');
    let obj = {remainder: users.length - lastIndex - 1, users: filterUsers};
    console.log('get users');
    console.log(obj);
    res.send(obj);
};
const getAllUsersHandler = (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let obj = {users: users};
    console.log('get all users');
    console.log(obj);
    res.send(obj);
};
const getDialogsHandler = (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let customDialogs = dialogs.map(item => {
        let id = item.id;
        let dialogMessages = messages.filter(message => message.dialogId === id);
        let lastMessage = dialogMessages[dialogMessages.length - 1].message;
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
const getMessagesHandler = (req: express.Request, res: express.Response) => {
    let dialogid = parseInt(req.params && req.params.dialogid);
    res.setHeader('Access-Control-Allow-Origin', '*');
    let dialogMessages = messages
        .filter(message => message.dialogId === dialogid)
        .map(message => {
            if (message.userId === 0) {
                message.direction = 'me';
            }
            else {
                message.direction = 'companion';
            }
            return message;
        });
    let obj = {messages: dialogMessages};
    console.log('get messages');
    console.log(obj);
    res.send(obj);
};
export default getApiRouter