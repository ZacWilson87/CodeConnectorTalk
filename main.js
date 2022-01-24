///////////////////////////////////////////////////////////////////////////////////////////////////////////
//COLORFUL LOGS
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

 function newRandomColorLog() {
     for(let i = 0; i < 3; i++){
         //create random number * max color in hex, convert to hex, add '#'
         const randomColor = '#' + Math.floor(Math.random() * maxColor1).toString(16);
         //Console allows you to change the color of the log using the '%c' identifier + the CSS properties you want to apply
        console.log(`%c My Hex is ${randomColor}`, `color: ${randomColor}; font-size: 14px;`);
    }
    console.log("____________") //just to seperate all the logs for better viewing
};

// further ideas 
/*
    - Make use of modules, create a class to export with a method for logging in color or create a new method on the console class/obj
    this method would essentially do the same thing as above
    import said class into your project and then use that logging method anytime you want to see your logs stylized.

    - Create an Extension that does this for you.
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// THE ARGUMENTS OBJ

const applyTaxes = function () {
    const tax = 0.1;
    // imagine creating a function where you have no idea how many arguments there will be, but we want to do the same thing to each argument
    // We can use the arguments obj to create an array of all the arguments
    const allPricesWithTax = Array.from(arguments);
    //create an empty array for output
    let returnArr = [];
    //loop through and push all item prices with tax now included
    for(let item of allPricesWithTax) {
        returnArr.push((item * tax) + item)
    }
    // then return the new arr

    //Further Notes, You could also specify which argument you want I.e. arguments[0]
    // other properties which might be helpful: 
    // arguments.callee.name --> outputs

    //console.log(arguments.callee.name)

    // arguments.callee.caller.name --> outputs callingAnotherFunction, which calls this fuction
    return returnArr;
}

void function callingAnotherFunction() {
    applyTaxes();
}

// console.log(applyTaxes(10, 99.89, 100, 17.76))



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//CUSTOM FUNCTION PROPERTIES
//You can add custom properties to functions, this is not normally seen but has its use cases
function greetCustomer() {
    if(greetCustomer.locale === 'de'){
        console.log('Guten tag, ein kumpel')
    } else if (greetCustomer.locale === 'es'){
        console.log('Hola, mi amigo')
    } else console.log("Hello, my friend")
}

// greetCustomer();
// greetCustomer.locale = 'de';
// greetCustomer();
// greetCustomer.locale = 'es';
// greetCustomer();



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// The plus operator
/*
Tons of people know about converting a value to a string using + "" (toString method usually used**)
console.log(123, true, [1,2,3] + '') //Example

//We can also do a similar thing with just the + operator to convert strings into numbers(if it can)
console.log(+'9.11', +true, +false);
console.log(+'0xffffff')
console.log(+'0xff')
console.log(+"Infinity")
let timestamp = new Date;
console.log(timestamp)
console.log(+timestamp)
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Console.table
//Ever console logging arrays? Another cool feature of js console obj is the console.table property
 let users = [
    {name: "Zac Wilson", age: 34, cool: true},
    {name: "JC Smiley", age: 21, cool: true},
    {name: "Lawrence Lockhart", age: 21, cool: true},
    {name: "Uncool Person", age: 88, cool: false},
]