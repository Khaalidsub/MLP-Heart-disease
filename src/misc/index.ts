import { HeartReader } from '../models/HeartReader';
import { NeuralNetwork } from '../nn';
import { matrix } from 'mathjs';
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

const heartData = HeartReader.fromCsv('data/heart_disease.csv');
heartData.load();
// console.log(matrix(heartData.result), matrix(heartData.heart));

const nn = new NeuralNetwork(13, 6, 4, 1); //n
nn.train(matrix(heartData.heart), matrix(heartData.result));
const result = nn.predict(matrix(heartData.heart));
console.log(result);
