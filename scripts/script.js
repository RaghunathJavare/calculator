const userInput = document.querySelector(".user__input");
const numberContainer = document.querySelector(".number__container");

//////////////////////////////////////////////////////////////////////////////////////////

let value = "";
userInput.value = 0;

// inserting zero
const zero = function (value) {
  userInput.value = value;
};

// Inserting a calculation

numberContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const event = e.target;

  if (event.classList.contains("buttons")) {
    if (!event) return;
    zero(value);
    // display numbers
    value = userInput.value += event.value;
  }

  // operation with user value

  if (event.classList.contains("btn__backspace")) {
    if (!value) return;

    // removing last charecters

    value = value.slice(0, -1);
    userInput.value = value;
    if (value.length < 1) userInput.value = 0;
  }
  //  removeing all numbers

  if (event.classList.contains("del__num")) {
    zero(0);
    value = "";
  }

  if (event.classList.contains("btn__equal") && value)
    value = userInput.value = `${eval(value)}`;
});
