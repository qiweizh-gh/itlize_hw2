/** 
 *  Exercise, part 1
 *  Welcomes the user by alert; asks user to enter names;
 *      asks user if he or she like Soccer
 *  Stores the info and displays on the page and console.
 */
// For test:
// let name = "zxcv";
// let cfm = true;
alert("Welsome to the page!");
let name = prompt("Please enter your name: ");
let cfm = confirm("Do you like Soccer?")
let nameDiv = document.getElementById("name");
nameDiv.innerHTML = name;
let likeSoccerDiv = document.getElementById("likeSoccer");
likeSoccerDiv.innerHTML = cfm;
console.log("The user name is: " + name);
console.log("The user likes Soccer or not: " + cfm);

/**
 * Exercise, part 2
 * Checks if a number between 0 to 15 (inclusive) is odd or even
 *  and print to the page and console.
 */
let msgDiv = document.getElementById("messages");
const range = 15;
for (let i = 0; i <= range; i++) {
    let node = document.createElement("p");
    let cur = "" + i + " is ";
    cur += i % 2 === 0 ? "even" : "odd";
    if (i === range) {
        cur += ".";
    } else {
        cur += ";";
    }
    node.innerHTML = cur;
    console.log(cur);
    msgDiv.appendChild(node);
}

/**
 * Part 3
 * Creates a function sum() that accepts any number of parameters 
 *  and adds them together by iterating over the values in arguments 
 *  with a while loop.
 */
function sum() {
    let args = Array.from(arguments);
    let index = 0;
    let res = 0;
    while (index < args.length) {
        res += args[index++];
        // console.log(args[index++]);
    }
    return res;
}
let sumDiv = document.getElementById("sum");
let sumRes = sum(1,2,3,4,5);
sumDiv.innerHTML = sumRes;
console.log("The result of sum() that accepts any number of parameters: " + sumRes);

/**
 * Part 4
 * Deletes the rollno property from the following object. Prints 
 *  the object before and after deletion. Displays the length of 
 *  the object.
 */
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
let beforeDiv = document.getElementById("before");
let cur = "Before deleting: " + JSON.stringify(student) 
    + "; the length of the object: ";
// count properties by Enumeration
let cnt = 0;
for (property in student) {
    cnt++;
}
beforeDiv.innerHTML = cur + cnt;;
console.log(student);

delete student.rollno;
let afterDiv = document.getElementById("after");
cur = "After deleting: " + JSON.stringify(student)
    + "; the length of the object: ";
afterDiv.innerHTML = cur + Object.keys(student).length;
console.log(student);

/**
 * Part 5
 * Sorts an array of JavaScript objects
 * Rules: 
 *  1. As to properties: vocabulary order from a-z.
 *      auther --> libraryId --> title
 *  2. As to objects: larger libraryID has higher order. 
 *      4264 --> 3245 --> 1254   
 */
var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'SuzanneCollins', libraryID: 3245 }
];
beforeDiv = document.getElementById("beforeSort");
cur = "Before sorting: "  + JSON.stringify(library);
beforeDiv.innerHTML = cur;
console.log(library);

// sort each object
for (let i = 0; i < library.length; i++) {
    let ordered = {};
    Object.keys(library[i]).sort().forEach(function(key) {
        ordered[key] = library[i][key];
    });
    library[i] = ordered;
}

// sort the array
library.sort((o1, o2) => {
    return Number(o2.libraryID) - Number(o1.libraryID);
});

afterDiv = document.getElementById("afterSort");
cur = "After sorting: " + JSON.stringify(library);
afterDiv.innerHTML = cur;
console.log(library);

/**
 * Part 6
 * Creates a constructor function Calculator that creates objects 
 *  with 3 methods:
 * 
 * @function read() asks for two values using prompt and remembers 
 *  them inobject properties.
 * @function sum() returns the sum of these properties.
 * @function mul() returns the multiplication product of these 
 *  properties.
 */
function Calculateor() {
    this.base = [], 
    this.read = function () {
        this.base.push(prompt("Please enter a number: "));
        this.base.push(prompt("Please enter a second number: "));
    },
    this.sum = function () {
        let res = 0;
        this.base.forEach((value) => {
            res += Number(value);
        });
        document.getElementById("resSum").innerHTML = res;
        return res;
    },
    this.mul = function () {
        let res = 1;
        this.base.forEach(v => {
            res *= Number(v);
        });
        document.getElementById("resMul").innerHTML = res;
        return res;
    }
}
let obj = new Calculateor();

/**
 * Part 7
 * Create a constructor function called Hero That will accept the
 *  arguments name and occupation.
 * 
 * @function whoAreYou() returns a sentence template including the name
 *  and the occupation of the object. 
 */
function Hero(name, occupation) {
    this.name = name;
    this.occupation = occupation;
}

Hero.prototype = {
    constructor: Hero,
    whoAreYou: function() {
        return "My name is " + this.name + " and I am a " + this.occupation + ".";
    }    
}

let hero = new Hero("Michaelangello", "Ninja");
document.getElementById("hero").innerHTML = hero.whoAreYou();
console.log(hero.whoAreYou());