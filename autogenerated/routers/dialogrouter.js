"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../data/users"));
var dialogs_1 = __importDefault(require("../data/dialogs"));
var messages_1 = __importDefault(require("../data/messages"));
var getDialogsHandler = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var customDialogs = dialogs_1.default.map(function (item) {
        var id = item.id;
        var dialogMessages = messages_1.default.filter(function (message) { return message.dialogId === id; });
        var lastMessage = dialogMessages.length && dialogMessages[dialogMessages.length - 1].message;
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
    console.log('get dialogs');
    console.log(obj);
    res.send(obj);
};
var router = express_1.default.Router();
router.get('/', getDialogsHandler);
exports.default = router;
