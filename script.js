"use strict";

// Selecting HTMl and CSS styles
const submitBTN = document.getElementById("btn");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const correctEmail = document.getElementById("correctEmail");

// Email regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitBTN.addEventListener("click", function (e) {
  e.preventDefault();
  let emailValue = emailInput.value;
  //   Test to see if the user input matches the regex
  if (!emailRegex.test(emailValue)) {
    emailError.classList.remove("hidden");
    emailInput.setAttribute("placeholder", "example@email/com");
    emailInput.classList.add("error-outline");
  } else {
    correctEmail.classList.remove("hidden");
    submitBTN.classList.add("hidden");
  }
});

// When user wants to edit their details
emailInput.addEventListener("keydown", function () {
  emailError.classList.add("hidden");
  emailInput.setAttribute("placeholder", "Your email address...");
  emailInput.classList.remove("error-outline");
  correctEmail.classList.add("hidden");
  submitBTN.classList.remove("hidden");
});
