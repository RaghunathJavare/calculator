const userInputValue = document.querySelector(".user__input");

const btnBackspace = document.querySelector(".btn__backspace");

const numberContainer = document.querySelector(".number__container");

const equal = document.querySelector(".equal");

let value;

numberContainer.addEventListener("click", function (e) {
  e.preventDefault();

  // if value is not a number
  if (e.target.classList.contains("buttons"))
    // display numbers
    value = userInputValue.value += e.target.value;

  // operation with numbers

  if (e.target.classList.contains("btn__backspace")) {
    // removing last charecter
    value = value.slice(0, -1);
    userInputValue.value = value
  }

  if (e.target.value === "AC") return (userInputValue.value = "");

  if (e.target.classList.contains("equal"))
    return (value = userInputValue.value = `${eval(value)}`);
});
