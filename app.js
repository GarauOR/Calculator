const btnList = document.querySelectorAll(".column-container > div");
const display = document.querySelector("#display");

btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    let isDisplayable = ["CE", "C", "=", "SQRT"];
    if (!isDisplayable.includes(btn.textContent)) {
      if (!isNaN(btn.textContent)) {
        display.value += btn.textContent;
      } else if (btn.textContent === ".") {
        if (onePoint(display.value)) {
          if (
            display.value[display.value.length - 1] === " " ||
            display.value.length < 1
          ) {
            display.value = display.value + "0" + btn.textContent;
          } else {
            display.value += btn.textContent;
          }
        }
      } else if (
        display.value.length > 0 &&
        display.value[display.value.length - 1] !== " " &&
        display.value[display.value.length - 1] !== "."
      ) {
        display.value = display.value + " " + btn.textContent + " ";
      }
    } else {
      switch (btn.textContent) {
        case "CE":
          display.value = "";
          break;

        case "C":
          if (display.value[display.value.length - 1] === " ") {
            display.value = display.value.slice(0, display.value.length - 3);
          } else {
            display.value = display.value.slice(0, display.value.length - 1);
          }
          break;

        case "=":
          display.value = operation(display.value);
          break;

        case "SQRT":
          display.value = Math.sqrt(display.value);
          break;
      }
    }
  });
});




function operation(operationString) {
  if (operable(operationString)) {
    let operationArr = operationString.split(" ");

    for (let i = 0; i < operationArr.length; i++) {
      if (operationArr[i] === "/") {
        const division = operationArr[i - 1] / operationArr[i + 1];
        operationArr.splice(i - 1, 3, `${division}`);
        i--;
      } else if (operationArr[i] === "*") {
        const multiplication = operationArr[i - 1] * operationArr[i + 1];
        operationArr.splice(i - 1, 3, `${multiplication}`);
        i--;
      }
    }

    for (let i = 0; i < operationArr.length; i++) {
      if (operationArr[i] === "+") {
        const sum = +operationArr[i - 1] + +operationArr[i + 1];
        operationArr.splice(i - 1, 3, `${sum}`);
        i--;
      } else if (operationArr[i] === "-") {
        const subtraction = operationArr[i - 1] - operationArr[i + 1];
        operationArr.splice(i - 1, 3, `${subtraction}`);
        i--;
      }
    }

    return operationArr[0];
  }
}

function operable(value) {
  const operableCheck = ["/", "*", "-", "+"];
  let operableResult = false;

  operableCheck.forEach((item) => {
    if (value.includes(item)) {
      operableResult = true;
    }
  });

  return operableResult;
}

function onePoint(checkString) {
  const checkArr = checkString.split(" ");
  if (checkArr[checkArr.length - 1].includes(".")) {
    return false;
  } else {
    return true;
  }
}
