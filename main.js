import Console, { clr } from "./newConsole.js";
//Generate random console.log colors
const maxColor2 = 16777215; // 16777215 is the max value for a color, its hexadecimal representation is FFFFFF
const maxColor1 = 0xffffff; // this is the same as the variable above, in JS we can us '0x' to notate hexadecimal values
console.log(maxColor1.toString(16), maxColor2.toString(16)); //we can use the toString() method to convert a number to hexidecimal

// deeper dive into toString Method
/*
    Javascript toString() method has an optional parameter, the radix.
    It is the base to use for converting a number to a string.
    Base 2 is binary
    Base 8 is octal
    Base 16 is hexadecimal
*/

export function newRandomColorLog() {
    //create random number * max color in hex, convert to hex, add #
    const randomColor = '#' + Math.floor(Math.random() * maxColor1).toString(16);
    //Console allows you to change the color of the log using the '%c' identifier + the CSS properties you want to apply
    clr(`%c My Hex is ${randomColor}`, `color: ${randomColor}; font-size: 14px;`);

};





