const POSITIONS = 100;

export const parseInstruction = (instruction) => {
  const [direction, ...distance] = instruction;

  return {
    direction,
    distance: parseInt(distance.join(""), 10),
  };
};

function mod(a, n) {
  const remainder = a % n;
  const shiftByModulus = remainder + n;
  return shiftByModulus % n;
}

export const rotateLeft = (position, distance) => {
  const newPosition = position - distance;
  return mod(newPosition, POSITIONS);
};

export const rotateRight = (position, distance) => {
  const newPosition = position + distance;

  return mod(newPosition, POSITIONS);
};

export const calculateFullRotations = (distance) =>
  Math.floor(distance / POSITIONS);

export const rotate = (direction, newPosition, distance) => {
  if (direction === "L") {
    return rotateLeft(newPosition, distance);
  } else {
    return rotateRight(newPosition, distance);
  }
};

export const calculatePositions = (instructions, startPosition) => {
  let newPosition = startPosition;
  const positions = [];
  for (let i = 0; i < instructions.length; i++) {
    const { direction, distance } = parseInstruction(instructions[i]);
    newPosition = rotate(direction, newPosition, distance);
    positions.push(newPosition);
  }

  return positions;
};

export const calculateZeroPasses = (instructions, startPosition) => {
  let currentPosition = startPosition;
  let zeroes = 0;
  for (let i = 0; i < instructions.length; i++) {
    const { direction, distance } = parseInstruction(instructions[i]);
    zeroes += calculateFullRotations(distance);

    const newPosition = rotate(direction, currentPosition, distance);

    if (currentPosition !== 0) {
      const wentToZero = newPosition === 0;
      const rightPastZero = direction === "R" && newPosition < currentPosition;
      const leftPastZero = direction === "L" && newPosition > currentPosition;

      if (wentToZero || rightPastZero || leftPastZero) {
        zeroes++;
      }
    }

    currentPosition = newPosition;
  }

  return zeroes;
};

export const findPassword = (positions) => {
  return positions.filter((position) => position === 0).length;
};

export const findPasswordFromInstructions = (instructions) => {
  return findPassword(calculatePositions(instructions, 50));
};

export const findZeroPassesFromInstructions = (instructions) => {
  return calculateZeroPasses(instructions, 50);
};
