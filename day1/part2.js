import { newLineToArray } from "../utils/parseInput.js";
import { readInput } from "../utils/readInput.js";
import {
  findPasswordFromInstructions,
  findZeroPassesFromInstructions,
} from "./puzzle.js";

let input = newLineToArray(readInput());
console.log(findZeroPassesFromInstructions(input));
