import { readInput } from "../utils/readInput.js";
import { commaSeparatedToArray } from "../utils/parseInput.js";
import {
  findInvalidIdsInRange,
  isInvalidRepeatingId,
  isInvalidSequenceId,
  parseRange,
} from "./puzzle.js";

const parsedInput = commaSeparatedToArray(readInput());

const sum = parsedInput.map((range) => {
  const { start, end } = parseRange(range);
  return findInvalidIdsInRange(start, end, isInvalidSequenceId)
    .map(Number)
    .reduce((acc, currentValue) => (acc += currentValue), 0);
});

console.log(sum.reduce((acc, currentValue) => (acc += currentValue), 0));
