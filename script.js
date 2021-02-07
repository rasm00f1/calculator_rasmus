"use strict";

window.addEventListener("DOMContentLoaded", initialize);
let firstDigit;
let secondDigit;
let operator;
let result;

function initialize() {
  document.querySelector("#calculate").addEventListener("click", readNumbers);
}

function readNumbers() {
  console.log();

  firstDigit = Number(document.querySelector("#firstnumber").value);
  secondDigit = Number(document.querySelector("#secondnumber").value);
  operator = document.querySelector("#operator").value;

  runCalculation();
}

function runCalculation() {
  console.log("run calculation");

  if (operator == "add") {
    result = parseInt(firstDigit + secondDigit);
  } else if (operator == "sub") {
    result = parseInt(firstDigit - secondDigit);
  } else if (operator == "mul") {
    result = parseInt(firstDigit * secondDigit);
  } else {
    result = parseInt(firstDigit / secondDigit);
  }

  displayResult();
}

function runOptionalRounding() {
  console.log("run optinal rounding");
}

function displayResult() {
  console.log(result);
}

function clearResults() {
  console.log("clear results");
}
