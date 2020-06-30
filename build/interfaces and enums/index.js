"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Target = exports.Exang = exports.Fbs = exports.ChestPain = exports.Sex = void 0;
var Sex;
(function (Sex) {
    Sex[Sex["male"] = 1] = "male";
    Sex[Sex["female"] = 0] = "female";
})(Sex = exports.Sex || (exports.Sex = {}));
var ChestPain;
(function (ChestPain) {
    ChestPain[ChestPain["low"] = 0] = "low";
    ChestPain[ChestPain["med"] = 1] = "med";
    ChestPain[ChestPain["high"] = 2] = "high";
    ChestPain[ChestPain["highest"] = 3] = "highest";
})(ChestPain = exports.ChestPain || (exports.ChestPain = {}));
var Fbs;
(function (Fbs) {
    Fbs[Fbs["true"] = 1] = "true";
    Fbs[Fbs["false"] = 0] = "false";
})(Fbs = exports.Fbs || (exports.Fbs = {}));
var Exang;
(function (Exang) {
    Exang[Exang["yes"] = 1] = "yes";
    Exang[Exang["no"] = 0] = "no";
})(Exang = exports.Exang || (exports.Exang = {}));
var Target;
(function (Target) {
    Target[Target["yes"] = 1] = "yes";
    Target[Target["no"] = 0] = "no";
})(Target = exports.Target || (exports.Target = {}));
