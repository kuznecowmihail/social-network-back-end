"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, password, followed, img) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.followed = followed;
        this.img = img;
    }
    return User;
}());
exports.default = User;
