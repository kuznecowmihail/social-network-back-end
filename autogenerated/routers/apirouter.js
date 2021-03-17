"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dialogrouter_1 = __importDefault(require("./dialogrouter"));
var userrouter_1 = __importDefault(require("./userrouter"));
var messagerouter_1 = __importDefault(require("./messagerouter"));
var postrouter_1 = __importDefault(require("./postrouter"));
var router = express_1.default.Router();
router.use('/dialogs', dialogrouter_1.default);
router.use('/users', userrouter_1.default);
router.use('/messages', messagerouter_1.default);
router.use('/posts', postrouter_1.default);
exports.default = router;
