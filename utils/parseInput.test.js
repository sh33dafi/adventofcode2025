import { readInput, readTestInput } from "./readInput.js";
import * as assert from "node:assert/strict";
import { commaSeparatedToArray, newLineToArray } from "./parseInput.js";
import { readFileSync } from "node:fs";

const testInput = readFileSync("./day1/input.test.txt", "utf8");

assert.deepEqual(newLineToArray(testInput), [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82",
]);
assert.deepEqual(
  commaSeparatedToArray(readFileSync("./day2/input.test.txt", "utf8")),
  [
    "11-22",
    "95-115",
    "998-1012",
    "1188511880-1188511890",
    "222220-222224",
    "1698522-1698528",
    "446443-446449",
    "38593856-38593862",
    "565653-565659",
    "824824821-824824827",
    "2121212118-2121212124",
  ],
);
