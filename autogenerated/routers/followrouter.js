"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../data/users"));
var response_1 = __importDefault(require("../models/response"));
var getFollowHandler = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var userId = parseInt(req.params && req.params.userid);
    var followed = false;
    users_1.default.map(function (item) {
        if (item.id === userId) {
            followed = !item.followed;
            item.followed = followed;
        }
    });
    var resp = new response_1.default(200, { followed: followed });
    console.log('get followed');
    console.log(resp);
    res.send(resp);
};
var router = express_1.default.Router();
router.put('/:userid', getFollowHandler);
exports.default = router;
