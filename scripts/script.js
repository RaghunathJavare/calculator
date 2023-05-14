const userInput = document.querySelector(".user__input");
const numberContainer = document.querySelector(".number__container");

let value;

numberContainer.addEventListener("click", function (e) {
  e.preventDefault();

  // if value is not a number
  if (e.target.classList.contains("buttons"))
    // display numbers
    value = userInput.value += e.target.value;

  // operation with

  if (e.target.classList.contains("btn__backspace")) {
    // removing last charecter
    value = value.slice(0, -1);
    userInput.value = value;
  }
  //  removeing all numbers

  if (e.target.classList.contains("del__num")) userInput.value = "";

  if (e.target.classList.contains("equal") && value)
    value = userInput.value = `${eval(value)}`;
});
