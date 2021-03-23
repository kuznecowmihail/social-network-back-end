"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apirouter_1 = __importDefault(require("./routers/apirouter"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var app = express_1.default();
app.use(cookie_parser_1.default());
app.use('/api/1.0', apirouter_1.default);
app.listen(3001);
