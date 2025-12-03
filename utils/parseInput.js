export const newLineToArray = (input) =>  {
    return input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
}