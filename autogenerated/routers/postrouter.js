"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var posts_1 = __importDefault(require("../data/posts"));
var response_1 = __importDefault(require("../models/response"));
var getPostsHandler = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var userId = parseInt(req.params && req.params.userId);
    var customPosts = posts_1.default.filter(function (item) {
        return item.userId === userId;
    });
    var resp = new response_1.default(200, { posts: customPosts });
    console.log('get posts');
    console.log(resp);
    res.send(resp);
};
var router = express_1.default.Router();
router.get('/:userId', getPostsHandler);
exports.default = router;
