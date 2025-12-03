import {readFileSync} from "node:fs";
import {join} from "node:path";

export const readInput = (dir = '') => {
    const path = join(dir, "./input.txt");
    return readFileSync(path, "utf8");
};


export const readTestInput = (dir = '') => {
    const path = join(dir, "./input.test.txt");
    return readFileSync(path, "utf8");
};
