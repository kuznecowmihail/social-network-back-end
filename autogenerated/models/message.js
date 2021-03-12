"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(id, message, userId, dialogId, date) {
        this.direction = '';
        this.id = id;
        this.message = message;
        this.userId = userId;
        this.dialogId = dialogId;
        this.date = date;
    }
    return Message;
}());
exports.default = Message;
