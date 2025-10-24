/**
 * @fileoverview This file contains a collection of basic to advanced JavaScript concepts.
 * It is designed to be a comprehensive reference for anyone looking to learn or review
 * the fundamentals of JavaScript. Each section is clearly marked with comments to
 * facilitate easy navigation and understanding.
 *
 * @author Aravind
 * @date 10/24/2025
 */

// =================================================================================================
// SECTION 1: BASIC SYNTAX AND VARIABLES
// =================================================================================================

// The time-honored tradition of printing "Hello World!" to the console.
// This is often the first step in learning any new programming language.
console.log("Hello World!");

// In JavaScript, we can declare variables using `let`, `const`, and `var`.
// - `let` is used for variables that can be reassigned.
// - `const` is for variables that will not be reassigned.
// - `var` is the older way of declaring variables and is function-scoped.
let x = 10;
const name = "Aravind";
var age = 25;

// Displaying the values of the variables in the console.
console.log("x:", x, "name:", name, "age:", age);

// =================================================================================================
// SECTION 2: LOOPS
// =================================================================================================

// A `for` loop is used to execute a block of code a specific number of times.
// Here, we are looping from 0 to 4.
console.log("--- For Loop ---");
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// A `while` loop continues to execute as long as a specified condition is true.
// This loop will run as long as `n` is less than 3.
console.log("--- While Loop ---");
let n = 0;
while (n < 3) {
    console.log("n:", n);
    n++;
}

// The `for-of` loop is ideal for iterating over arrays.
// It provides a simple way to access each element of the array.
console.log("--- For-of Loop (for arrays) ---");
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// The `for-in` loop is used to iterate over the properties of an object.
// It gives you the keys, which you can use to access the values.
console.log("--- For-in Loop (for objects) ---");
const person = { name: "Aravind", age: 25 };
for (const key in person) {
    console.log(key + ":", person[key]);
}

// =================================================================================================
// SECTION 3: FUNCTIONS
// =================================================================================================

// Functions are blocks of code that can be defined and called to perform a specific task.
// This function takes a name and returns a greeting.
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Aravind"));

// Arrow functions are a more concise way to write functions in modern JavaScript.
// They are especially useful for short, one-line functions.
console.log("--- Arrow Function ---");
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// Functions can have default parameters, which are used if no argument is provided.
// This makes functions more flexible and reduces the need for conditional checks.
console.log("--- Function with Default Parameters ---");
function greetWithDefault(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greetWithDefault()); // Uses the default value
console.log(greetWithDefault("Aravind")); // Uses the provided value

// =================================================================================================
// SECTION 4: CONDITIONAL STATEMENTS
// =================================================================================================

// `if-else` statements are used to execute different blocks of code based on a condition.
// This is fundamental for controlling the flow of your program.
console.log("--- If-Else Statement ---");
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is 5 or less");
}

// A `switch` statement is a clean way to handle multiple conditions.
// It compares a value against several cases and executes the corresponding block.
console.log("--- Switch Case ---");
const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}

// =================================================================================================
// SECTION 5: ARRAYS AND OBJECTS
// =================================================================================================

// Arrays are used to store lists of items.
// They come with many built-in methods for manipulation.
console.log("--- Arrays ---");
const colors = ["red", "green", "blue"];
colors.push("yellow"); // Adds an element to the end of the array
console.log("Colors:", colors);

// Objects are collections of key-value pairs.
// They are perfect for representing structured data.
console.log("--- Objects ---");
const car = { make: "Toyota", model: "Camry", year: 2020 };
console.log("Car:", car.make + " " + car.model);
car.year = 2021; // You can modify the properties of an object
console.log("Updated Year:", car.year);

// =================================================================================================
// SECTION 6: PRACTICE TASKS
// =================================================================================================

// Here are a few simple tasks to practice the concepts covered above.
// Feel free to modify and expand on them.

// Task 1: Create 3 variables and print their sum.
console.log("--- Practice Task 1: Sum of Variables ---");
const a = 5;
const b = 10;
const c = 15;
console.log("Sum:", a + b + c);

// Task 2: Write a loop to print even numbers from 1 to 20.
console.log("--- Practice Task 2: Even Numbers from 1 to 20 ---");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 3: Write a fuction to check if a number is prime.
console.log("--- Practice Task 3: Check Prime Number ---");
function isPrime(num) {
    if (num <= 1) return false;
    for (let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("Is 29 prime?", isPrime(29));


// =================================================================================================
// END OF FILE
// =================================================================================================

// This file has been structured to be a comprehensive yet easy-to-follow guide to
// JavaScript. We hope you find it useful for your learning and development needs.
// Happy coding!

