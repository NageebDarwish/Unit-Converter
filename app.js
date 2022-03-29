// Get Unit
let sss = document.querySelector(".unit").value;
const para1 = document.querySelector(".item1");
const para2 = document.querySelector(".item2");
const para3 = document.querySelector(".item3");

// Cacluate
let meter = (sss * 3.2808399).toFixed(2);
let feet = (sss / 3.2808399).toFixed(2);

let liters = (sss * 0.264172052).toFixed(2);
let gallons = (sss / 0.264172052).toFixed(2);

let pounds = (sss * 2.20462262).toFixed(2);
let kilograms = (sss / 2.20462262).toFixed(2);

// Meter To Feet And Feet To Meter

para1.innerHTML = `${sss} meters = ${meter} feet | ${sss} feet = ${feet} meters`;

// Liters To Gallon And Gallon To Liters

para2.innerHTML = `${sss} liters = ${liters} gallons | ${sss} galons = ${gallons} liters`;

// Kilograms To Pounds And Pounds To Kilograms

para3.innerHTML = `${sss} kilos = ${kilograms} pounds | ${sss} pounds = ${pounds} liters`;

// ONType ///////////////////////////////////////////////////////////

function changeValue() {
  // Get Unit
  let unit = document.querySelector(".unit").value;
  const para1 = document.querySelector(".item1");
  const para2 = document.querySelector(".item2");
  const para3 = document.querySelector(".item3");

  // Cacluate
  let meter = (unit * 3.2808399).toFixed(2);
  let feet = (unit / 3.2808399).toFixed(2);

  let liters = (unit * 0.264172052).toFixed(2);
  let gallons = (unit / 0.264172052).toFixed(2);

  let pounds = (unit * 2.20462262).toFixed(2);
  let kilograms = (unit / 2.20462262).toFixed(2);

  // Meter To Feet And Feet To Meter

  para1.innerHTML = `${unit} meters = ${meter} feet | ${unit} feet = ${feet} meters`;

  // Liters To Gallon And Gallon To Liters

  para2.innerHTML = `${unit} liters = ${liters} gallons | ${unit} galons = ${gallons} liters`;

  // Kilograms To Pounds And Pounds To Kilograms

  para3.innerHTML = `${unit} kilos = ${kilograms} pounds | ${unit} pounds = ${pounds} liters`;

  // Local Storage --------------
  console.log(unit);
  window.localStorage.setItem("value", unit);
  if (window.localStorage.getItem("value")) {
    unit = window.localStorage.getItem("value");
  }
}
