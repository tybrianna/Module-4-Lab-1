// Task One
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let submitButton = document.getElementById("submitButton");

function capitalizeFirstLetter(firstName, lastName) {
  if (firstName.length === 0 || lastName.length === 0) {
    return '';
  }

  const capFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const capLast = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return capFirst + " " + capLast;
}

submitButton.addEventListener("click", function () {
  const fullName = capitalizeFirstLetter(firstName.value.trim(), lastName.value.trim());

    if (fullName === "") {
    alert("Please enter your full name.");
    return;
  }

  alert(`Welcome ${fullName}`);

});

// Task Two
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const taxRateInput = document.getElementById("taxRate");

const calculateBtn = document.getElementById("calculateBtn");
const answer = document.getElementById("answer");

function calculateTotalCost(price, quantity, taxRate) {

  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    return "Invalid input.";
  }

  let totalCost = (price * quantity) * (1 + taxRate);

  return totalCost;
}

calculateBtn.addEventListener("click", function () {
  
  let price = Number(priceInput.value);
  let quantity = Number(quantityInput.value);
  let taxRate = Number(taxRateInput.value);

  let total = calculateTotalCost(price, quantity, taxRate);

  answer.textContent = total;
});

// Task Three
const ageInput = document.getElementById("age");
const employedInput = document.getElementById("isEmployed");

const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkEligibility(age, isEmployed) {

  if (age > 18 && isEmployed === true) {
    return "Eligible for the program.";
  }

  else if (age > 18 && isEmployed === false) {
    return "Conditionally eligible for the program.";
  }

  else {
    return "Not eligible for the program.";
  }
}

checkBtn.addEventListener("click", function () {

  let age = Number(ageInput.value);

  let isEmployed = employedInput.value.toLowerCase() === "true";

  let message = checkEligibility(age, isEmployed);

  result.textContent = message;
});

// Task Four