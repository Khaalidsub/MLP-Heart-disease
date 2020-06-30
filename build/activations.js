"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sigmoid = void 0;
var mathjs_1 = require("mathjs");
function sigmoid(x, derivative) {
    var fx = 1 / (1 + mathjs_1.exp(-x));
    if (derivative) {
        return fx * (1 - fx);
    }
    return fx;
}
exports.sigmoid = sigmoid;
