import {readFileSync} from "node:fs";

export const readInput = () => {
    const path = './input.txt';
    return readFileSync(path, 'utf8');
}

export const readTestInput = () => {
    const path = './input.test.txt';
    return readFileSync(path, 'utf8');
}