// to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100.

const isEqualTo100 = (a,b) => {
    return a === 100 || b === 100 || (a + b === 100);
}

console.log(isEqualTo100(100,12));