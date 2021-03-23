"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../data/users"));
var response_1 = __importDefault(require("../models/response"));
var getAuthHandler = function (req, res) {
    var login = req.cookies['login'];
    var password = req.cookies['password'];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 1);
    var filterUser = users_1.default.filter(function (user) {
        return user.name === login && user.password === password;
    });
    var resp;
    if (!filterUser.length) {
        resp = new response_1.default(401, { message: "Not authorized" });
    }
    else {
        resp = new response_1.default(200, { userId: filterUser[0].id, login: login, password: password, isFetching: false });
    }
    console.log('get auth');
    console.log(resp);
    res.send(resp);
};
var router = express_1.default.Router();
router.get('/', getAuthHandler);
exports.default = router;
