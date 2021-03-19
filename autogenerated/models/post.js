"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(id, text, userId, likesCount) {
        this.id = id;
        this.text = text;
        this.userId = userId;
        this.likesCount = likesCount;
    }
    return Post;
}());
exports.default = Post;
