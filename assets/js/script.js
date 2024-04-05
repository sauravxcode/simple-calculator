const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100")); //If output has '%', replace with '/100' before evaluating.
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {  
    output = output.toString().slice(0, -1); //If DEL button is clicked, remove the last character from the output.
  } else {   
    if (output === "" && specialChars.includes(btnValue)) return; //If output is empty and button is specialChars then return
    output += btnValue;
  }
  display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value)); //Button click listener calls calculate() with dataset value as argument.
});