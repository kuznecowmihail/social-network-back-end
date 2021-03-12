"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = __importDefault(require("../models/message"));
var messages = [
    new message_1.default(1, 'privet', 1, 1, new Date()),
    new message_1.default(1, 'vse gavno', 0, 1, new Date()),
    new message_1.default(1, 'davai po novoi', 0, 1, new Date()),
    new message_1.default(1, 'ladno', 1, 1, new Date()),
    new message_1.default(1, 'xm', 0, 1, new Date()),
    new message_1.default(1, 'ya tebya znau', 0, 2, new Date()),
    new message_1.default(1, 'da?', 2, 2, new Date()),
    new message_1.default(1, 'da', 0, 2, new Date()),
    new message_1.default(1, 'i che', 2, 2, new Date()),
    new message_1.default(1, 'vonyaet))', 0, 2, new Date()),
    new message_1.default(1, 'privet', 3, 3, new Date()),
    new message_1.default(1, 'poka', 0, 3, new Date()),
    new message_1.default(1, 'chego tak grubo', 3, 3, new Date()),
    new message_1.default(1, 'privetik', 0, 3, new Date()),
    new message_1.default(1, 'ya tebya znau', 4, 4, new Date()),
    new message_1.default(1, 'ne nado tak govorit`', 0, 4, new Date()),
    new message_1.default(1, 'idi naxui', 5, 5, new Date()),
    new message_1.default(1, 'privet', 6, 6, new Date()),
    new message_1.default(1, 'ignor...', 6, 6, new Date()),
    new message_1.default(1, 'i ne govori', 0, 6, new Date()),
    new message_1.default(1, 'govoru', 6, 6, new Date()),
    new message_1.default(1, 'au', 6, 6, new Date()),
    new message_1.default(1, 'auuuu', 0, 6, new Date()),
    new message_1.default(1, 'blya', 7, 7, new Date()),
    new message_1.default(1, 'blyat`', 0, 7, new Date()),
    new message_1.default(1, 'blyaaaat`', 0, 7, new Date()),
    new message_1.default(1, 'ladno', 7, 7, new Date()),
    new message_1.default(1, 'blyaaaaaaat`', 7, 7, new Date()),
    new message_1.default(1, 'privet', 8, 8, new Date()),
    new message_1.default(1, 'darou', 8, 8, new Date())
];
exports.default = messages;
