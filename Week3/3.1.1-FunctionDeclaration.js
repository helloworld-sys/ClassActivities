// function expression
const greet = function() {
  console.log("Hello!");
};

// function declaration
function greet() {
  console.log("Hello");
};

// function expression
const threeModTwo = function() {
  console.log(3 % 2);
};

function threeModTwo() {
  console.log(3 % 2);
};

// function expression
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
}   else {
  console.log(false);
}
  }

  function checkDrivingAge() {
    if (age >= 16) {
      console.log(true);
  } else {
      console.log(false);
  }
    }



