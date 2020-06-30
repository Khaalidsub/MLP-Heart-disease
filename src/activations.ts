import { exp } from 'mathjs';

export function sigmoid(x: number, derivative: boolean): number {
	let fx = 1 / (1 + exp(-x));
	if (derivative) {
		return fx * (1 - fx);
	}
	return fx;
}
