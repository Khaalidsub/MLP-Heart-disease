"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeartReader_1 = require("../models/HeartReader");
var nn_1 = require("../nn");
var mathjs_1 = require("mathjs");
// const pink = matrix([
// 	// blue, small
// 	[ 0.1, 0.1 ],
// 	[ 0.3, 0.3 ],
// 	[ 0.5, 0.6 ],
// 	[ 0.4, 0.8 ],
// 	[ 0.9, 0.1 ],
// 	[ 0.75, 0.4 ],
// 	[ 0.75, 0.9 ],
// 	[ 0.6, 0.9 ]
// ]);
// const buyOrNot = matrix([ [ 0 ], [ 0 ], [ 1 ], [ 1 ], [ 0 ], [ 0 ], [ 1 ], [ 1 ] ]);
//these are the inputs
// const input = matrix([ [ 0, 0.5 ], [ 0.5, 1 ], [ 1, 0.2 ], [ 1, 1 ] ]);
//these are the targeted values
// const target = matrix([ [ 0 ], [ 1 ], [ 1 ], [ 0 ] ]);
var heartData = HeartReader_1.HeartReader.fromCsv('data/heart_disease.csv');
heartData.load();
// console.log(matrix(heartData.result), matrix(heartData.heart));
var nn = new nn_1.NeuralNetwork(13, 6, 4, 1); //n
nn.train(mathjs_1.matrix(heartData.heart), mathjs_1.matrix(heartData.result));
var result = nn.predict(mathjs_1.matrix(heartData.heart));
console.log(result);
