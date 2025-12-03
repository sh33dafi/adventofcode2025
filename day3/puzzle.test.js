import * as assert from "node:assert/strict";
import {calculateJolt, calculateLargest12Jolt, calculateLargestJolt} from "./puzzle.js";
import {readTestInput} from "../utils/readInput.js";
import {newLineToArray} from "../utils/parseInput.js";
import {sum} from "../utils/math.js";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

assert.equal(calculateJolt(5,6), 56);

assert.equal(calculateLargestJolt('987654321111111'), 98);
assert.equal(calculateLargestJolt('811111111111119'), 89);
assert.equal(calculateLargestJolt('234234234234278'), 78);
assert.equal(calculateLargestJolt('818181911112111'), 92);


assert.equal(calculateLargest12Jolt('987654321111111'), 987654321111);
assert.equal(calculateLargest12Jolt('811111111111119'), 811111111119);
assert.equal(calculateLargest12Jolt('234234234234278'), 434234234278);
assert.equal(calculateLargest12Jolt('818181911112111'), 888911112111);
assert.equal(calculateLargest12Jolt('2712233521522212239633525221424223292522332923342263323223226223332531222232333293222213262324223122'), 999964223122);
assert.equal(calculateLargest12Jolt('3322443333432323234422242432523223322422243343331431224244233442143534231422213522432133222452222242'), 555452222242);

const input = newLineToArray(readTestInput(__dirname));
assert.equal(input.map(bank => calculateLargestJolt(bank)).reduce(sum,0), 357);
assert.equal(input.map(bank => calculateLargest12Jolt(bank)).reduce(sum,0), 3121910778619);