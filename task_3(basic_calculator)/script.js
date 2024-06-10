document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let cInput = "0";
  let currentOperator = "";
  let prevInput = "";

  function updateDisplay() {
    display.textContent = cInput;
  }

  function handleDigitClick(digit) {
    if (
      cInput === "0" ||
      cInput === "Infinity" ||
      cInput === "-Infinity"
    ) {
      cInput = digit;
    } else {
      cInput += digit;
    }
    updateDisplay();
  }

  function handleOperatorClick(operator) {
    prevInput = cInput;
    cInput = "0";
    currentOperator = operator;
  }

  function handleEqualsClick() {
    const prev = parseFloat(prevInput);
    const current = parseFloat(cInput);

    switch (currentOperator) {
      case "+":
        cInput = prev + current;
        break;
      case "-":
        cInput = prev - current;
        break;
      case "*":
        cInput = prev * current;
        break;
      case "/":
        cInput = prev / current;
        break;
    }

    currentOperator = "";
    prevInput = "";
    updateDisplay();
  }

  function clear() {
    cInput = "0";
    currentOperator = "";
    prevInput = "";
    updateDisplay();
  }


  for (let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", () => {
      handleDigitClick(i.toString());
    });
  }

  document.getElementById("add").addEventListener("click", () => handleOperatorClick("+"));
  document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
  document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
  document.getElementById("divide").addEventListener("click", () => handleOperatorClick("/"));

 
  document.getElementById("decimal").addEventListener("click", () => {
    if (!cInput.includes(".")) {
      cInput += ".";
      updateDisplay();
    }
  });

  document.getElementById("equals").addEventListener("click", handleEqualsClick);
  document.getElementById("clear").addEventListener("click", clear);
  document.getElementById("backspace").addEventListener("click", () => {
    cInput = cInput.slice(0, -1);
    if (cInput === "") {
      cInput = "0";
    }
    updateDisplay();
  });

  updateDisplay();
});