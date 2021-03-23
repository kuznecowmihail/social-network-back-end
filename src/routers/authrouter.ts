import express from 'express';
import users from '../data/users';
import ResponseObject from '../models/response';

const getAuthHandler = (req: express.Request, res: express.Response) => {
    let login = req.cookies['login'];
    let password = req.cookies['password'];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 1);
    let filterUser = users.filter(user => {
        return user.name === login && user.password === password;
    });
    let resp;
    if(!filterUser.length) {
        resp = new ResponseObject(401, {message: "Not authorized"});
    }
    else {
        resp = new ResponseObject(200, {userId: filterUser[0].id, login, password, isFetching: false});
    }
    console.log('get auth');
    console.log(resp);
    res.send(resp);
};
const router = express.Router();
router.get('/', getAuthHandler);

export default router;