import { Target, Sex, ChestPain, Fbs } from '../interfaces and enums';

export type HeartData = [
	number,
	Sex,
	ChestPain,
	number,
	number,
	Fbs,
	number,
	number,
	number,
	number,
	number,
	number,
	number
];

export type HeartResult = [Target];
