"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuralNetwork = void 0;
var mathjs_1 = require("mathjs");
var activation = __importStar(require("./activations"));
var NeuralNetwork = /** @class */ (function () {
    function NeuralNetwork(input_nodes, hidden_nodes, hidden_nodes2, output_nodes) {
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.hidden_nodes2 = hidden_nodes2;
        this.output_nodes = output_nodes;
        this.output = 0;
        this.epochs = 70000;
        this.activation = activation.sigmoid;
        this.learning_rate = 0.62; //learning rates
        this.synapse0 = mathjs_1.random([this.input_nodes, this.hidden_nodes], -1.0, 1.0); //connections from input layer to hiden
        this.synapse1 = mathjs_1.random([this.hidden_nodes, this.hidden_nodes2], -1.0, 1.0); //connections from hidden layer  to hidden layer 2
        this.synapse2 = mathjs_1.random([this.hidden_nodes2, this.output_nodes], -1.0, 1.0); //connections from hidden layer2 to output
    }
    NeuralNetwork.prototype.train = function (input, target) {
        var _this = this;
        for (var i = 0; i < this.epochs; i++) {
            // console.log('input :', input, 'synapse :', this.synapse0);
            //forward
            var input_layer = input; //input data
            var hidden_layer = mathjs_1.multiply(input_layer, this.synapse0).map(function (v) { return _this.activation(v, false); }); //output of hidden layer neurons (matrix!)
            var hidden_layer2 = mathjs_1.multiply(hidden_layer, this.synapse1).map(function (v) { return _this.activation(v, false); }); //output of hidden layer2 neurons (matrix!)
            var output_layer = mathjs_1.multiply(hidden_layer2, this.synapse2).map(function (v) { return _this.activation(v, false); }); // output of last layer neurons (matrix!)
            //backward
            var output_error = mathjs_1.subtract(target, output_layer); //calculating error (matrix!)
            var output_delta = mathjs_1.dotMultiply(output_error, output_layer.map(function (v) { return _this.activation(v, true); })); //calculating delta (vector!)
            var hidden_error2 = mathjs_1.multiply(output_delta, mathjs_1.transpose(this.synapse2)); //calculating of error of hidden layer 2 neurons (matrix!)
            var hidden_delta2 = mathjs_1.dotMultiply(hidden_error2, hidden_layer2.map(function (v) { return _this.activation(v, true); })); //calculating delta (vector!)
            var hidden_error = mathjs_1.multiply(hidden_delta2, mathjs_1.transpose(this.synapse1)); //calculating of error of hidden layer neurons (matrix!)
            var hidden_delta = mathjs_1.dotMultiply(hidden_error, hidden_layer.map(function (v) { return _this.activation(v, true); })); //calculating delta (vector!)
            //gradient descent
            this.synapse2 = mathjs_1.add(this.synapse2, mathjs_1.multiply(mathjs_1.transpose(hidden_layer2), mathjs_1.multiply(output_delta, this.learning_rate)));
            this.synapse1 = mathjs_1.add(this.synapse1, mathjs_1.multiply(mathjs_1.transpose(hidden_layer), mathjs_1.multiply(hidden_delta2, this.learning_rate)));
            this.synapse0 = mathjs_1.add(this.synapse0, mathjs_1.multiply(mathjs_1.transpose(input_layer), mathjs_1.multiply(hidden_delta, this.learning_rate)));
            this.output = output_layer;
            if (i % 1000 == 0)
                console.log("OutPut Error: " + mathjs_1.mean(mathjs_1.abs(output_error)));
            if (mathjs_1.mean(mathjs_1.abs(output_error)) < 0.25)
                break;
        }
    };
    NeuralNetwork.prototype.predict = function (input) {
        var _this = this;
        var input_layer = input;
        var hidden_layer = mathjs_1.multiply(input_layer, this.synapse0).map(function (v) { return _this.activation(v, false); }); //output of hidden layer neurons (matrix!)
        var hidden_layer2 = mathjs_1.multiply(hidden_layer, this.synapse1).map(function (v) { return _this.activation(v, false); }); //output of hidden layer2 neurons (matrix!)
        var output_layer = mathjs_1.multiply(hidden_layer2, this.synapse2).map(function (v) { return _this.activation(v, false); }); // output of last layer neurons (matrix!)
        return mathjs_1.round(output_layer);
    };
    return NeuralNetwork;
}());
exports.NeuralNetwork = NeuralNetwork;
