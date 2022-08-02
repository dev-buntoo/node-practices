let rect = require('./rectangle');

const solveRect = (l, b) => {
    console.log(`Solving for rectangle with length = ${l} and breadth = ${b}`);
    if (l <= 0 || b <= 0) {
        console.log('Rectangle dimensions should be greater than zero: l = ' + l + ', b = ' + b);
    } else {
        console.log(`Perimeter = ${rect.perimiter(l, b)}`);
        console.log(`Area = ${rect.area(l, b)}`);
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
solveRect(3, 0);