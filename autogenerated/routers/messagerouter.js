"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var messages_1 = __importDefault(require("../data/messages"));
var getMessagesHandler = function (req, res) {
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
    console.log('get messages');
    console.log(obj);
    res.send(obj);
};
var router = express_1.default.Router();
router.get('/:dialogid', getMessagesHandler);
exports.default = router;
