"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartReader = void 0;
var CsvFileReader_1 = require("../readers/CsvFileReader");
var HeartReader = /** @class */ (function () {
    function HeartReader(reader) {
        this.reader = reader;
        this.heart = [];
        this.result = [];
    }
    HeartReader.fromCsv = function (filename) {
        return new HeartReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    HeartReader.prototype.load = function () {
        this.reader.read();
        this.heart = this.reader.data.map(function (row) {
            return [
                parseInt(row[0]) / 100,
                parseInt(row[1]),
                parseInt(row[2]) / 3,
                parseInt(row[3]) / 200,
                parseInt(row[4]) / 564,
                parseInt(row[5]),
                parseInt(row[6]) / 2,
                parseInt(row[7]) / 202,
                parseInt(row[8]),
                parseInt(row[9]) / 6.2,
                parseInt(row[10]) / 2,
                parseInt(row[11]) / 4,
                parseInt(row[12]) / 3
            ];
        });
        this.result = this.reader.data.map(function (row) {
            return [parseInt(row[13])];
        });
    };
    return HeartReader;
}());
exports.HeartReader = HeartReader;
