"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nn_1 = require("./nn");
var mathjs_1 = require("mathjs");
var HeartReader_1 = require("./models/HeartReader");
var util_1 = __importDefault(require("util"));
var heartData = HeartReader_1.HeartReader.fromCsv('data/heart_disease.csv');
heartData.load();
var nn = new nn_1.NeuralNetwork(13, 7, 4, 1); //nn
nn.train(mathjs_1.matrix(heartData.heart), mathjs_1.matrix(heartData.result));
var result = nn.predict(mathjs_1.matrix(heartData.heart));
console.log(util_1.default.inspect(result, { maxArrayLength: null })); //o
