const userInput = document.querySelector(".user__input");
const numberContainer = document.querySelector(".number__container");

//////////////////////////////////////////////////////////////////////////////////////////

let value;

numberContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const event = e.target;

  // if value is not a number
  if (event.classList.contains("buttons"))
    // display numbers
    value = userInput.value += event.value;

  // operation with

  if (event.classList.contains("btn__backspace")) {
    if (!value) return;
    // removing last charecter
    value = value.slice(0, -1);
    userInput.value = value;
  }
  //  removeing all numbers

  if (event.classList.contains("del__num")) userInput.value = "";

  if (event.classList.contains("btn__equal") && value)
    value = userInput.value = `${eval(value)}`;
});
