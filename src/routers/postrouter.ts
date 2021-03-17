import express from 'express';
import posts from '../data/posts';

const getPostsHandler = (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let userId = parseInt(req.params && req.params.userId);
    let customPosts = posts.filter(item => {
        return item.userId === userId;
    })
    let obj = {posts: customPosts};
    console.log('get posts');
    console.log(obj);
    res.send(obj);
};
const router = express.Router();
router.get('/:userId', getPostsHandler);

export default router;