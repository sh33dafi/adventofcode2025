export const newLineToArray = (input) => {
  return splitToArray(input, "\n");
};

export const commaSeparatedToArray = (input) => {
  return splitToArray(input, ",");
};

export const splitToArray = (input, sep) => {
  return input
    .split(sep)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
};
