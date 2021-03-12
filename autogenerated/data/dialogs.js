"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dialog_1 = __importDefault(require("../models/dialog"));
var dialogs = [
    new dialog_1.default(1),
    new dialog_1.default(2),
    new dialog_1.default(3),
    new dialog_1.default(4),
    new dialog_1.default(5),
    new dialog_1.default(6),
    new dialog_1.default(7),
    new dialog_1.default(8)
];
exports.default = dialogs;
