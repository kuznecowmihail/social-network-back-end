import express from 'express';
import posts from '../data/posts';
import ResponseObject from '../models/response';

const getPostsHandler = (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let userId = parseInt(req.params && req.params.userId);
    let customPosts = posts.filter(item => {
        return item.userId === userId;
    });
    let resp = new ResponseObject(200, {posts: customPosts});
    console.log('get posts');
    console.log(resp);
    res.send(resp);
};
const router = express.Router();
router.get('/:userId', getPostsHandler);

export default router;