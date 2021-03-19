"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../data/users"));
var posts_1 = __importDefault(require("../data/posts"));
var getUserHandler = function (req, res) {
    var userId = parseInt(req.params && req.params.userId);
    var filterUsers = users_1.default.filter(function (user) {
        return user.id === userId;
    });
    var user = filterUsers[0];
    var userPosts = posts_1.default.filter(function (post) { return post.userId === (user && user.id); });
    res.setHeader('Access-Control-Allow-Origin', '*');
    var obj = {
        info: filterUsers.length && filterUsers[0],
        posts: userPosts
    };
    console.log('get info');
    console.log(obj);
    res.send(obj);
};
var getUsersHandler = function (req, res) {
    var page = parseInt(req.params && req.params.page);
    var firstIndex = countRecordOfPage * page;
    var lastIndex = countRecordOfPage * page + countRecordOfPage - 1;
    var filterUsers = users_1.default.filter(function (item, index) { return index >= firstIndex && index <= lastIndex; });
    res.setHeader('Access-Control-Allow-Origin', '*');
    var obj = { remainder: users_1.default.length - lastIndex - 1, users: filterUsers };
    console.log('get users');
    console.log(obj);
    res.send(obj);
};
var getAllUsersHandler = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var obj = { users: users_1.default };
    console.log('get all users');
    console.log(obj);
    res.send(obj);
};
var countRecordOfPage = 3;
var router = express_1.default.Router();
router.get('/:userId', getUserHandler);
router.get('/page/:page', getUsersHandler);
router.get('/all', getAllUsersHandler);
exports.default = router;
