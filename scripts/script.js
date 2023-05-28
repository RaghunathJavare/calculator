const userInput = document.querySelector(".user__input");
const numberContainer = document.querySelector(".number__container");
const delNum = document.querySelector(".del__num");

//////////////////////////////////////////////////////////////////////////////////////////

let value = "";
userInput.value = 0;

// inserting value
const init = function (value) {
  userInput.value = value;
};

const reuse = function (event) {
  if (!event.classList.contains("icons")) {
    if (delNum.textContent === event.textContent) {
      event.textContent = "AC";
    } else delNum.textContent = "C";
  }
  init(value);
};

// Inserting a calculation

numberContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const event = e.target;


  if (event.classList.contains("buttons")) {
    if (!event) return;
    reuse(event);
    
    // display numbers
    value = userInput.value += event.value;
  }

  // operation with user value

  if (event.closest(".backspace")) {
    // removing last charecters

    value = value.slice(0, -1);
    init(value);
    if (value.length < 1) {
      userInput.value = 0;
      delNum.textContent = "AC";
    }
  }
  //  removeing all numbers

  if (event.classList.contains("del__num")) {
    init(0);
    value = "";
    delNum.textContent = "AC";
  }

  if (event.classList.contains("btn__equal") && value)
    value = userInput.value = `${eval(value)}`;
});
