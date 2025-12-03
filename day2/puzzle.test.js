import * as assert from "node:assert/strict";
import {
  findInvalidIdsInRange,
  isInvalidRepeatingId,
  isInvalidSequenceId,
  parseRange,
} from "./puzzle.js";

assert.equal(isInvalidRepeatingId("11"), true);
assert.equal(isInvalidRepeatingId("22"), true);
assert.equal(isInvalidRepeatingId("99"), true);
assert.equal(isInvalidRepeatingId("1010"), true);
assert.equal(isInvalidRepeatingId("1188511885"), true);
assert.equal(isInvalidRepeatingId("222222"), true);
assert.equal(isInvalidRepeatingId("446446"), true);
assert.equal(isInvalidRepeatingId("38593859"), true);

assert.equal(isInvalidSequenceId("11"), true);
assert.equal(isInvalidSequenceId("22"), true);
assert.equal(isInvalidSequenceId("99"), true);
assert.equal(isInvalidSequenceId("111"), true);
assert.equal(isInvalidSequenceId("999"), true);
assert.equal(isInvalidSequenceId("1010"), true);
assert.equal(isInvalidSequenceId("1188511885"), true);
assert.equal(isInvalidSequenceId("222222"), true);
assert.equal(isInvalidSequenceId("446446"), true);
assert.equal(isInvalidSequenceId("38593859"), true);
assert.equal(isInvalidSequenceId("565656"), true);
assert.equal(isInvalidSequenceId("824824824"), true);
assert.equal(isInvalidSequenceId("2121212121"), true);

const invalidIds = [12, 13, 14, 15, 4000, 446447];

invalidIds.forEach((id) => {
  assert.equal(isInvalidRepeatingId(id), false);
});

/*
11-22 has two invalid IDs, 11 and 22.
95-115 has one invalid ID, 99.
998-1012 has one invalid ID, 1010.
1188511880-1188511890 has one invalid ID, 1188511885.
222220-222224 has one invalid ID, 222222.
1698522-1698528 contains no invalid IDs.
446443-446449 has one invalid ID, 446446.
38593856-38593862 has one invalid ID, 38593859.
The rest of the ranges contain no invalid IDs.
'565653-565659',
    '824824821-824824827',
    '2121212118-2121212118',
 */

assert.deepEqual(findInvalidIdsInRange(11, 22, isInvalidRepeatingId), [
  "11",
  "22",
]);
assert.deepEqual(findInvalidIdsInRange(95, 115, isInvalidRepeatingId), ["99"]);
assert.deepEqual(findInvalidIdsInRange(998, 1012, isInvalidRepeatingId), [
  "1010",
]);
assert.deepEqual(
  findInvalidIdsInRange(1188511880, 1188511890, isInvalidRepeatingId),
  ["1188511885"],
);
assert.deepEqual(findInvalidIdsInRange(222220, 222224, isInvalidRepeatingId), [
  "222222",
]);
assert.deepEqual(
  findInvalidIdsInRange(1698522, 1698528, isInvalidRepeatingId),
  [],
);
assert.deepEqual(findInvalidIdsInRange(446443, 446449, isInvalidRepeatingId), [
  "446446",
]);
assert.deepEqual(
  findInvalidIdsInRange(38593856, 38593862, isInvalidRepeatingId),
  ["38593859"],
);
assert.deepEqual(
  findInvalidIdsInRange(565653, 565659, isInvalidRepeatingId),
  [],
);
assert.deepEqual(
  findInvalidIdsInRange(824824821, 824824827, isInvalidRepeatingId),
  [],
);
assert.deepEqual(
  findInvalidIdsInRange(2121212118, 2121212124, isInvalidRepeatingId),
  [],
);

assert.deepEqual(findInvalidIdsInRange(11, 22, isInvalidSequenceId), [
  "11",
  "22",
]);
assert.deepEqual(findInvalidIdsInRange(95, 115, isInvalidSequenceId), [
  "99",
  "111",
]);
assert.deepEqual(findInvalidIdsInRange(998, 1012, isInvalidSequenceId), [
  "999",
  "1010",
]);
assert.deepEqual(
  findInvalidIdsInRange(1188511880, 1188511890, isInvalidSequenceId),
  ["1188511885"],
);
assert.deepEqual(findInvalidIdsInRange(222220, 222224, isInvalidSequenceId), [
  "222222",
]);
assert.deepEqual(
  findInvalidIdsInRange(1698522, 1698528, isInvalidSequenceId),
  [],
);
assert.deepEqual(findInvalidIdsInRange(446443, 446449, isInvalidSequenceId), [
  "446446",
]);
assert.deepEqual(
  findInvalidIdsInRange(38593856, 38593862, isInvalidSequenceId),
  ["38593859"],
);
assert.deepEqual(findInvalidIdsInRange(565653, 565659, isInvalidSequenceId), [
  "565656",
]);
assert.deepEqual(
  findInvalidIdsInRange(824824821, 824824827, isInvalidSequenceId),
  ["824824824"],
);
assert.deepEqual(
  findInvalidIdsInRange(2121212118, 2121212124, isInvalidSequenceId),
  ["2121212121"],
);

assert.deepEqual(parseRange("2121212118-2121212118"), {
  start: 2121212118,
  end: 2121212118,
});
