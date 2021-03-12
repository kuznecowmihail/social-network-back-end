"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./data/users"));
var messages_1 = __importDefault(require("./data/messages"));
var dialogs_1 = __importDefault(require("./data/dialogs"));
var countRecordOfPage = 3;
var getApiRouter = function () {
    var router = express_1.default.Router();
    router.get('/users/:page', getUsersHandler);
    router.get('/users/all', getAllUsersHandler);
    router.get('/dialogs', getDialogsHandler);
    router.get('/messages/:dialogid', getMessagesHandler);
    return router;
};
var getUsersHandler = function (req, res) {
    console.log('get users');
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
    console.log(obj);
    res.send(obj);
};
var getAllUsersHandler = function (req, res) {
    console.log('get all users');
    res.setHeader('Access-Control-Allow-Origin', '*');
    var obj = { users: users_1.default };
    console.log(obj);
    res.send(obj);
};
var getDialogsHandler = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var customDialogs = dialogs_1.default.map(function (item) {
        var id = item.id;
        var dialogMessages = messages_1.default.filter(function (message) { return message.dialogId === id; });
        var lastMessage = dialogMessages[dialogMessages.length - 1].message;
        var userId = dialogMessages.filter(function (message) { return message.userId !== 0; })[0].userId;
        var user = users_1.default.filter(function (user) { return user.id === userId; })[0];
        return {
            id: id,
            name: user.name,
            img: user.img,
            lastMessage: lastMessage
        };
    });
    var obj = { dialogs: customDialogs };
    console.log(obj);
    res.send(obj);
};
var getMessagesHandler = function (req, res) {
    console.log('get dialogs');
    var dialogid = parseInt(req.params && req.params.dialogid);
    res.setHeader('Access-Control-Allow-Origin', '*');
    var dialogMessages = messages_1.default
        .filter(function (message) { return message.dialogId === dialogid; })
        .map(function (message) {
        if (message.userId === 0) {
            message.direction = 'me';
        }
        else {
            message.direction = 'companion';
        }
        return message;
    });
    var obj = { messages: dialogMessages };
    console.log(obj);
    res.send(obj);
};
exports.default = getApiRouter;
