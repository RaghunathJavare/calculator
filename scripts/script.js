// Number Elemets

const headerText = document.querySelector(".header-text");
const oneNumber = document.querySelector(".one");
const twoNumber = document.querySelector(".two");
const threeNumber = document.querySelector(".three");
const fourNumber = document.querySelector(".four");
const fiveNumber = document.querySelector(".five");
const sixNumber = document.querySelector(".six");
const sevenNumber = document.querySelector(".seven");
const eightNumber = document.querySelector(".eight");
const nineNumber = document.querySelector(".nine");
const zeroNumber = document.querySelector(".zero");

// Operator Elements
const opeClear = document.querySelector(".zero");
const opeBackSpace = document.querySelector(".zero");
const opeDivider = document.querySelector(".zero");
const opeMinus = document.querySelector(".zero");
const opeMultiply = document.querySelector(".zero");
const opeAddition = document.querySelector(".zero");
const opeEqual = document.querySelector(".zero");

const addNumber = function (val) {
  document.querySelector(".header-text").value += val;
};
