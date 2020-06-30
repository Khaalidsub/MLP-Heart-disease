import { NeuralNetwork } from './nn';
import { matrix } from 'mathjs';
import { HeartReader } from './models/HeartReader';
import util from 'util';

const heartData = HeartReader.fromCsv('data/heart_disease.csv');
heartData.load();

const nn = new NeuralNetwork(13, 7, 4, 1); //nn
nn.train(matrix(heartData.heart), matrix(heartData.result));
const result = nn.predict(matrix(heartData.heart));

console.log(util.inspect(result, { maxArrayLength: null })); //o
