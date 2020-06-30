import { format, random, multiply, dotMultiply, mean, abs, subtract, transpose, add, round } from 'mathjs';
import * as activation from './activations';

export class NeuralNetwork {
	public epochs: number;
	public learning_rate: number;

	activation: (x: number, der: boolean) => number;
	output = 0;

	synapse0: any;
	synapse1: any;
	synapse2: any;

	constructor(
		public input_nodes: number,
		public hidden_nodes: number,
		public hidden_nodes2: number,
		public output_nodes: number
	) {
		this.epochs = 70000;
		this.activation = activation.sigmoid;
		this.learning_rate = 0.62; //learning rates

		this.synapse0 = random([ this.input_nodes, this.hidden_nodes ], -1.0, 1.0); //connections from input layer to hiden
		this.synapse1 = random([ this.hidden_nodes, this.hidden_nodes2 ], -1.0, 1.0); //connections from hidden layer  to hidden layer 2
		this.synapse2 = random([ this.hidden_nodes2, this.output_nodes ], -1.0, 1.0); //connections from hidden layer2 to output
	}

	train(input: any, target: any) {
		for (let i = 0; i < this.epochs; i++) {
			// console.log('input :', input, 'synapse :', this.synapse0);
			//forward
			let input_layer = input; //input data
			let hidden_layer = multiply(input_layer, this.synapse0).map((v: number) => this.activation(v, false)); //output of hidden layer neurons (matrix!)
			let hidden_layer2 = multiply(hidden_layer, this.synapse1).map((v: number) => this.activation(v, false)); //output of hidden layer2 neurons (matrix!)
			let output_layer = multiply(hidden_layer2, this.synapse2).map((v: number) => this.activation(v, false)); // output of last layer neurons (matrix!)

			//backward
			let output_error = subtract(target, output_layer); //calculating error (matrix!)
			let output_delta = dotMultiply(output_error, output_layer.map((v: number) => this.activation(v, true))); //calculating delta (vector!)
			let hidden_error2 = multiply(output_delta, transpose(this.synapse2)); //calculating of error of hidden layer 2 neurons (matrix!)
			let hidden_delta2 = dotMultiply(hidden_error2, hidden_layer2.map((v: number) => this.activation(v, true))); //calculating delta (vector!)
			let hidden_error = multiply(hidden_delta2, transpose(this.synapse1)); //calculating of error of hidden layer neurons (matrix!)
			let hidden_delta = dotMultiply(hidden_error, hidden_layer.map((v: number) => this.activation(v, true))); //calculating delta (vector!)

			//gradient descent
			this.synapse2 = add(
				this.synapse2,
				multiply(transpose(hidden_layer2), multiply(output_delta, this.learning_rate))
			);
			this.synapse1 = add(
				this.synapse1,
				multiply(transpose(hidden_layer), multiply(hidden_delta2, this.learning_rate))
			);
			this.synapse0 = add(
				this.synapse0,
				multiply(transpose(input_layer), multiply(hidden_delta, this.learning_rate))
			);
			this.output = output_layer;

			if (i % 1000 == 0) console.log(`OutPut Error: ${mean(abs(output_error as number))}`);
			if (mean(abs(output_error as number)) < 0.25) break;
		}
	}
	predict(input: any) {
		let input_layer = input;
		let hidden_layer = multiply(input_layer, this.synapse0).map((v: number) => this.activation(v, false)); //output of hidden layer neurons (matrix!)
		let hidden_layer2 = multiply(hidden_layer, this.synapse1).map((v: number) => this.activation(v, false)); //output of hidden layer2 neurons (matrix!)
		let output_layer = multiply(hidden_layer2, this.synapse2).map((v: number) => this.activation(v, false)); // output of last layer neurons (matrix!)

		return round(output_layer);
	}
}
