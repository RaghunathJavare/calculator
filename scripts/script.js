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
console.log(oneNumber,twoNumber,threeNumber,fourNumber,fiveNumber,sixNumber,sevenNumber,eightNumber,nineNumber,zeroNumber);


const addNumber = function (val) {
  document.querySelector(".header-text").value += val;
};


oneNumber.addEventListener("click", function () {
  addNumber("1");
});


twoNumber.addEventListener("click", function () {
  addNumber("2");
});


threeNumber.addEventListener("click", function () {
  addNumber("3");
});


fourNumber.addEventListener("click", function () {
  addNumber("4");
});


fiveNumber.addEventListener("click", function () {
  addNumber("5");
});



sixNumber.addEventListener("click", function () {
  addNumber("6");
});


sevenNumber.addEventListener("click", function () {
  addNumber("7");
});


eightNumber.addEventListener("click", function () {
  addNumber("8");
});


nineNumber.addEventListener("click", function () {
  addNumber("9");
});

zeroNumber.addEventListener("click", function () {
  addNumber("0");
});

