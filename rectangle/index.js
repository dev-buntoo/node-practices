let rect = require('./rectangle');

const solveRect = (l, b) => {
    console.log(`Solving for rectangle with length = ${l} and breadth = ${b}`);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error:", err.message)
        } else {
            console.log(`The perimeter is ${rectangle.perimeter()} and the area is ${rectangle.area()} of rectangle with length = ${l} and breadth = ${b}`);
        }

    })
    console.log("This is called after the call to the callback function");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
solveRect(3, 0);