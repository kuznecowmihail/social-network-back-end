"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = __importDefault(require("../models/post"));
var posts = [
    new post_1.default('Hi, how are you?', 0, 5),
    new post_1.default('Its my first post', 0, 3),
    new post_1.default('Hi', 1, 5),
    new post_1.default('how are you?', 2, 10)
];
exports.default = posts;