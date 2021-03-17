"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../data/users"));
var getUserHandler = function (req, res) {
    var userId = parseInt(req.params && req.params.userId);
    var filterUsers = users_1.default.filter(function (item) {
        return item.id === userId;
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    var obj = { user: filterUsers.length && filterUsers[0] };
    console.log('get user');
    console.log(obj);
    res.send(obj);
};
var getUsersHandler = function (req, res) {
    var page = parseInt(req.params && req.params.page);
    var firstIndex = countRecordOfPage * page;
    var lastIndex = countRecordOfPage * page + countRecordOfPage - 1;
    var filterUsers = users_1.default.filter(function (item, index) {
        if (index >= firstIndex && index <= lastIndex) {
            return true;
        }
        return false;
    });
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
