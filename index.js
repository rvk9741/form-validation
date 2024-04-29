"use strict";

const form = document.getElementById("form");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

let isValid = false;
let passwordMatching = false;

const formValidation = () => {
  isValid = form.checkValidity();

  //   checking password match
  if (password.value === cpassword.value) {
    passwordMatching = true;
    password.style.borderColor = "green";
  } else {
    passwordMatching = false;
    password.style.borderColor = "red";
    cpassword.style.borderColor = "red";
  }
};

const storeFormData = () => {
  const userData = {
    fName: form.fName.value,
    lName: form.lName.value,
    email: form.email.value,
    phone: form.phone.value,
    url: form.url.value,
    password: form.password.value,
  };
  console.log(userData);
};

const getFormData = (e) => {
  e.preventDefault();
  formValidation();

  // if isValid & passwords are matching then only save form data
  if (isValid && passwordMatching == true) {
    storeFormData();
  }
};

// event listener
form.addEventListener("submit", getFormData);
