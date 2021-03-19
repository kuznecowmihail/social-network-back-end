import express from 'express';
import users from '../data/users';
import posts from '../data/posts';

const getUserHandler = (req: express.Request, res: express.Response) => {
    let userId = parseInt(req.params && req.params.userId);
    let filterUsers = users.filter(user => {
        return user.id === userId;
    })
    let user = filterUsers[0];
    let userPosts = posts.filter(post => post.userId === (user && user.id));
    res.setHeader('Access-Control-Allow-Origin', '*');
    let obj = {
        info: filterUsers.length && filterUsers[0],
        posts: userPosts
    };
    console.log('get info');
    console.log(obj);
    res.send(obj);
};
const getUsersHandler = (req: express.Request, res: express.Response) => {
    let page = parseInt(req.params && req.params.page);
    let firstIndex = countRecordOfPage * page;
    let lastIndex = countRecordOfPage * page + countRecordOfPage - 1;
    let filterUsers = users.filter((item, index) => index >= firstIndex && index <= lastIndex);
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
const countRecordOfPage = 3;
const router = express.Router();
router.get('/:userId', getUserHandler);
router.get('/page/:page', getUsersHandler);
router.get('/all', getAllUsersHandler);

export default router;