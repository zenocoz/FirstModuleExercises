

Skip to content
Using Gmail with screen readers
Meet
Start a meeting
Join a meeting
Hangouts

1 of 32,594
(no subject)
Inbox

Federico Soncini <federico.soncini@gmail.com>
16:09 (7 minutes ago)
to me

/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = function(l1, l2) {
    return l1*l2;
}

console.log("Area of the Rectangle: ", area(2,2));
//alternative
//const area = (l1, l2) => l1*l2;


/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const CrazySum = function(x, y) {
    if (x === y) {
        return 3*(x+y);
    } else
    return;
}
console.log("Crazy Sum: ", CrazySum(3,3));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const CrazyDiff = function(x) {
    let absolute_diff = abs(x) - 19;
    return absolute_diff; 
}

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const Boundary = function(n) {
    if (n > 20 && n <= 100 || n === 400) {
        return true;
    } 
    return false;
}

console.log(Boundary(300));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const Strivify = function (str) {
    const striveAddOn = "Strive";
    if (str.slice(0,6)!== striveAddOn) {
        return striveAddOn+str;
    } else
    return str;
}

console.log(Strivify("Dog"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/*

const Check3and7 = function(x) {
    if (x%3===0) {
        return "x is a multiple of 3";
    } else if 
       (x%7===0) {
        return "x is a multiple of 7";
       }
    else
    return "x is neither a multiple of 3 or 7";
} 
*/

//with switch
const Check3and7 = function(x) {
    switch(x) {
        case (x%3===0) :
            return "x is a multiple of 3";
            break;
        case (x%7===0) :
            return "x is a multiple of 7";
            break;
        default:
            return "x is neither a multiple of 3 or 7";
            break;
        }
}
    
console.log(Check3and7(49)); //TODO






/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const ReverseString = function (str) {
    return str.split("").reverse().join("");
}

console.log(ReverseString("ParmaCalcio")); //TODO

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const UpperFirst = function(str) {
    let stringArray = str.split(" ");
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i]
    }
}

console.log(UpperFirst("Lo Stile di quelli che non hanno stile"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/


const CutString = function (str) {
    str.slice(1,-1);
}
console.log(CutString("Strive"));


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/

