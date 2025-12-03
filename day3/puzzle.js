export const calculateJolt = (batt1Jolt,batt2Jolt) => {
    return Number(`${batt1Jolt}${batt2Jolt}`);
}

export const calculateLargestJolt = (batteryBank) => {
    const batteryBankJolts =  batteryBank.split('').map(Number);

    let largestJolt = 0;

    for (let i = 0; i < batteryBankJolts.length - 1; i++) {
        for (let j = i+1; j < batteryBankJolts.length; j++) {
            const jolt = calculateJolt(batteryBankJolts[i], batteryBankJolts[j]);
            if (jolt > largestJolt) {
                largestJolt = jolt;
            }
        }
    }

    return largestJolt;
}

export const calculateLargest12Jolt = (batteryBank) => {
    const digits = batteryBank.split('');
    const n = digits.length;
    const MAX_DIGITS = 12;
    const numToRemove = n - MAX_DIGITS;

    if (numToRemove <= 0) {
        return Number(batteryBank);
    }

    const stack = [];
    let k = numToRemove;

    for (const digit of digits) {
        while (stack.length > 0 && stack[stack.length - 1] < digit && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    const resultString = stack.join('');
    return Number(resultString);
}

