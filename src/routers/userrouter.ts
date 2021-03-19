import express from 'express';
import users from '../data/users';
import posts from '../data/posts';
import ResponseObject from '../models/response';

const getUserHandler = (req: express.Request, res: express.Response) => {
    let userId = parseInt(req.params && req.params.userId);
    let filterUsers = users.filter(user => {
        return user.id === userId;
    })
    res.setHeader('Access-Control-Allow-Origin', '*');
    let resp = new ResponseObject(200, {
        user: filterUsers.length && filterUsers[0]
    });
    console.log('get info');
    console.log(resp);
    res.send(resp);
};
const getUsersHandler = (req: express.Request, res: express.Response) => {
    let page = parseInt(req.params && req.params.page);
    let firstIndex = countRecordOfPage * page;
    let lastIndex = countRecordOfPage * page + countRecordOfPage - 1;
    let filterUsers = users.filter((item, index) => index >= firstIndex && index <= lastIndex);
    res.setHeader('Access-Control-Allow-Origin', '*');
    let resp = new ResponseObject(200, {
        remainder: users.length - lastIndex - 1,
        users: filterUsers
    });
    console.log('get users');
    console.log(resp);
    res.send(resp);
};
const getAllUsersHandler = (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let resp = new ResponseObject(200, {users: users});
    console.log('get all users');
    console.log(resp);
    res.send(resp);
};
const countRecordOfPage = 3;
const router = express.Router();
router.get('/:userId', getUserHandler);
router.get('/page/:page', getUsersHandler);
router.get('/all', getAllUsersHandler);

export default router;