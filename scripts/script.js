const userInputValue = document.querySelector(".user__input");

const btnBackspace = document.querySelector(".btn__backspace");

const numberContainer = document.querySelector(".number__container");

const equal = document.querySelector(".equal");

let value;

numberContainer.addEventListener("click", function (e) {
  // userValue

  const userValue = e.target.value;

  // if value is not a number

  if (!userValue) {
    return userValue;
  }

  value = userInputValue.value += userValue;

  if (userValue === "AC") return (userInputValue.value = "");
});

// display result

const result = function () {
value = userInputValue.value = `${eval(value)}`
};

equal.addEventListener("click", result);
