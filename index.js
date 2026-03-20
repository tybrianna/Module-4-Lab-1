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
function calculateTotalCost(Price, quantity, taxRate)


// Task Three


// Task Four