import {readInput} from "../utils/readInput.js";
import {newLineToArray} from "../utils/parseInput.js";
import {calculateLargest12Jolt} from "./puzzle.js";
import {sum} from "../utils/math.js";

const input = newLineToArray(readInput());

console.log(input.map(bank => calculateLargest12Jolt(bank)).reduce(sum,0))