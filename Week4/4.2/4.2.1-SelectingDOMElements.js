const { domainToUnicode } = require("url");

// select all unordered list (ul) elements
document.querySelectorAll("ul");
document.getElementsByTagName("ul");

// select all elements with the class "class-week"
document.getElementsByClassName("class-week");
document.querySelectorAll(".class-week");
// select all elements with the class "nav-bar"
document.querySelectorAll(".nav-bar");
document.getElementsByClassName("nav-bar");

// select the element with the id "dog-picture" and save it to a variable
const dogPicture = document.getElementsById("dog-picture");
console.log(dogPicture);
