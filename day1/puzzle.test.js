import {
  calculateFullRotations,
  calculatePositions,
  calculateZeroPasses,
  findPassword,
  findPasswordFromInstructions,
  findZeroPassesFromInstructions,
  parseInstruction,
  rotateLeft,
  rotateRight,
} from "./puzzle.js";
import * as assert from "node:assert/strict";
import { readTestInput } from "../utils/readInput.js";
import { newLineToArray } from "../utils/parseInput.js";

assert.deepEqual(parseInstruction("L61"), { direction: "L", distance: 61 });
assert.deepEqual(parseInstruction("R48"), { direction: "R", distance: 48 });

assert.deepEqual(rotateLeft(50, 20), 30);
assert.deepEqual(rotateLeft(50, 68), 82);
assert.deepEqual(rotateLeft(50, 50), 0);
assert.deepEqual(rotateLeft(23, 48), 75);
assert.deepEqual(rotateLeft(1, 99), 2);
assert.deepEqual(rotateLeft(50, 100), 50);
assert.deepEqual(rotateLeft(50, 200), 50);
assert.deepEqual(rotateLeft(50, 202), 48);
assert.deepEqual(rotateLeft(52, 200), 52);

assert.deepEqual(rotateRight(50, 20), 70);
assert.deepEqual(rotateRight(52, 48), 0);
assert.deepEqual(rotateRight(50, 51), 1);
assert.deepEqual(rotateRight(95, 60), 55);
assert.deepEqual(rotateRight(50, 200), 50);

const instructions = newLineToArray(readTestInput());
assert.deepEqual(
  calculatePositions(instructions, 50),
  [82, 52, 0, 95, 55, 0, 99, 0, 14, 32],
);

assert.deepEqual(findPassword([82, 52, 0, 95, 55, 0, 99, 0, 14, 32]), 3);
assert.deepEqual(findPasswordFromInstructions(instructions), 3);

assert.equal(calculateFullRotations(1000), 10);

assert.deepEqual(calculateZeroPasses(instructions, 50), 6);
assert.deepEqual(findZeroPassesFromInstructions(instructions), 6);
