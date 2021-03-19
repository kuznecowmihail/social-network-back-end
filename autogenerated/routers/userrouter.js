"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../data/users"));
var response_1 = __importDefault(require("../models/response"));
var getUserHandler = function (req, res) {
    var userId = parseInt(req.params && req.params.userId);
    var filterUsers = users_1.default.filter(function (user) {
        return user.id === userId;
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resp = new response_1.default(200, {
        user: filterUsers.length && filterUsers[0]
    });
    console.log('get info');
    console.log(resp);
    res.send(resp);
};
var getUsersHandler = function (req, res) {
    var page = parseInt(req.params && req.params.page);
    var firstIndex = countRecordOfPage * page;
    var lastIndex = countRecordOfPage * page + countRecordOfPage - 1;
    var filterUsers = users_1.default.filter(function (item, index) { return index >= firstIndex && index <= lastIndex; });
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resp = new response_1.default(200, {
        remainder: users_1.default.length - lastIndex - 1,
        users: filterUsers
    });
    console.log('get users');
    console.log(resp);
    res.send(resp);
};
var getAllUsersHandler = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var resp = new response_1.default(200, { users: users_1.default });
    console.log('get all users');
    console.log(resp);
    res.send(resp);
};
var countRecordOfPage = 3;
var router = express_1.default.Router();
router.get('/:userId', getUserHandler);
router.get('/page/:page', getUsersHandler);
router.get('/all', getAllUsersHandler);
exports.default = router;
