const userInput = document.querySelector(".user__input");
const numberContainer = document.querySelector(".number__container");
const btnDelAll = document.querySelector(".btn-delete__all");

//////////////////////////////////////////////////////////////////////////////////////////

class App {
  #value = "";

  constructor() {
    userInput.value = 0;
    // Event handelers
    numberContainer.addEventListener("click", this.#calcCulation.bind(this));
  }

  #renderValue(value) {
    userInput.value = value;
  }

  #reuse(event) {
    if (!event.classList.contains("icons")) {
      if (btnDelAll.textContent === event.textContent) {
        event.textContent = "AC";
      }
      btnDelAll.textContent = "C";
    }
    this.#renderValue(this.#value);
  }

  // Inserting a calculation

  #calcCulation(e) {
    e.preventDefault();
    const event = e.target;

    if (event.classList.contains("buttons")) {
      if (!event) return;
      this.#reuse(event);

      // display numbers
      this.#value = userInput.value += event.value;
    }

    // operation with user value

    if (event.closest(".backspace")) {
      // removing last charecters

      this.#value = this.#value.slice(0, -1);
      this.#renderValue(this.#value);

      if (this.#value.length < 1) userInput.value = 0;
      btnDelAll.textContent = "AC";
    }

    
    //  removeing all numbers

    if (event.classList.contains("btn-delete__all")) {
      this.#renderValue(0);
      this.#value = "";
      btnDelAll.textContent = "AC";
    }

    if (event.classList.contains("btn__equal") && this.#value)
      this.#value = userInput.value = `${eval(this.#value)}`;
  }
}




const app = new App();
