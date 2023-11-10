console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}

printOdds(50);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Michael", 20);

// Exercise 3 Section
console.log("EXERCISE 2:\n==========\n");

function whichQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("(0, 0) is at origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on y-axis.`);
    }else if (y === 0) {
        console.log(`(${x}, ${y}) is on x-axis.`);
      } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
      } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
      } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
      } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
      } else {
        console.log(`(${x}, ${y}) is on an axis, but not a quadrant.`);
    }
}

whichQuadrant(0, 2);  
whichQuadrant(1, 2);
whichQuadrant(-6, 18);

// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");

function triangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
       return "Invalid triangle"; 
    } else if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

console.log("Sides 1, 2, 2 make " + triangleType(1, 2, 2));
console.log("Sides 1, 1, 2 make " + triangleType(1, 1, 2));
console.log("Sides 3, 3, 3 make " + triangleType(3, 3, 3));
console.log("Sides 1, 2, 2 make " + triangleType(1, 2, 2));