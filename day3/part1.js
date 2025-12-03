import {readInput} from "../utils/readInput.js";
import {newLineToArray} from "../utils/parseInput.js";
import {calculateLargestJolt} from "./puzzle.js";
import {sum} from "../utils/math.js";

const input = newLineToArray(readInput());

console.log(input.map(bank => calculateLargestJolt(bank)).reduce(sum,0))