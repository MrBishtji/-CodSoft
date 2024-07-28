const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("btn"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value === "C") {
      display.innerText = "";
    } else if (value === "CE") {
      const currentText = display.innerText;
      // Find the last operator in the string
      const lastOperatorIndex = Math.max(
        currentText.lastIndexOf("+"),
        currentText.lastIndexOf("-"),
        currentText.lastIndexOf("*"),
        currentText.lastIndexOf("/")
      );

      if (lastOperatorIndex === -1) {
        // If no operators are found, clear the whole display
        display.innerText = "";
      } else {
        // Otherwise, remove the part after the last operator
        display.innerText = currentText.slice(0, lastOperatorIndex + 1);
      }
    } else if (value === "=") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += value;
    }
  });
});
