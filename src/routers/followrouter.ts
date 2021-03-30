import express from 'express';
import users from '../data/users';
import ResponseObject from '../models/response';

const getFollowHandler = (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let userId = parseInt(req.params && req.params.userid);
    let followed = false;
    users.map(item => {
        if(item.id === userId) {
            followed = !item.followed;
            item.followed = followed;
        }
    })
    let resp = new ResponseObject(200, {followed});
    console.log('get followed');
    console.log(resp);
    res.send(resp);
};
const router = express.Router();
router.put('/:userid', getFollowHandler);

export default router;