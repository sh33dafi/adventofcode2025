export const isInvalidRepeatingId = (id) => {
  const regex = /^(\d+)\1$/;
  return regex.test(id);
};

export const isInvalidSequenceId = (id) => {
  const regex = /^(\d+)\1+$/;
  return regex.test(id);
};

export const findInvalidIdsInRange = (start, end, check) => {
  const ids = [];
  for (let i = start; i <= end; i++) {
    ids.push(i);
  }

  return ids.filter((id) => check(String(id))).map(String);
};

export const parseRange = (range) => {
  const [start, end] = range.split("-").map(Number);
  return { start, end };
};
