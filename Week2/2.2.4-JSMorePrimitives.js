// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let var1 = 1;
let var2 = "2";
let var3 = true;
let var4 = null;
let var5;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(var2, var1, var3, var5, var4);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let tempLit = 'This is ${var2} much fun!';
// reassign the value of the variable that references "null"
var4 = "This is the way!";
// print the value and its type
console.log(var4, typeof var4);

// print a variable that causes a ReferenceError
//foo;
//console.log(foo)

// alter the previous line to no longer cause a ReferenceError

foo = true;
console.log(foo);
