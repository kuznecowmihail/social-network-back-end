"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(content, userId, likeCount) {
        this.content = content;
        this.userId = userId;
        this.likeCount = likeCount;
    }
    return Post;
}());
exports.default = Post;
