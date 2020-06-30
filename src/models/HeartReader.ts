import { CsvFileReader } from '../readers/CsvFileReader';
import { HeartData, HeartResult } from '../types';
import { Sex, ChestPain, Fbs, Target } from '../interfaces and enums';
import { string } from 'mathjs';

interface DataReader {
	read(): void;
	data: string[][];
}

export class HeartReader {
	static fromCsv(filename: string): HeartReader {
		return new HeartReader(new CsvFileReader(filename));
	}
	heart: HeartData[] = [];
	constructor(public reader: DataReader) {}
	result: HeartResult[] = [];
	load(): void {
		this.reader.read();
		this.heart = this.reader.data.map((row: string[]): HeartData => {
			return [
				parseInt(row[0]) / 100,
				parseInt(row[1]) as Sex,
				(parseInt(row[2]) as ChestPain) / 3,
				parseInt(row[3]) / 200,
				parseInt(row[4]) / 564,
				parseInt(row[5]) as Fbs,
				parseInt(row[6]) / 2,
				parseInt(row[7]) / 202,
				parseInt(row[8]),
				parseInt(row[9]) / 6.2,
				parseInt(row[10]) / 2,
				parseInt(row[11]) / 4,
				parseInt(row[12]) / 3
			];
		});
		this.result = this.reader.data.map((row: string[]): HeartResult => {
			return [ parseInt(row[13]) as Target ];
		});
	}
}
