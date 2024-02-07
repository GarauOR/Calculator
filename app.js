const btnList = document.querySelectorAll(".column-container > div");
const display = document.querySelector("#display");

btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        let isDisplayable = ["C", "DEL", "="];
        if (!isDisplayable.includes(btn.textContent)) {display.value += btn.textContent}
        else {
            switch (btn.textContent) {
                case "C":
                    display.value = "";
                    break;

                case "DEL":
                    display.value = display.value.slice(0, display.value.length-1);
                    break;
                
                case "=":
                    console.log("=");
                    break;
            }
        }
    });
});

//numHandler checks if +arr.lenght-1 is !NaN  true:concat every number clicked  false:push the clicked number
//operatorHandler pushes in the arr the text content if arr.legth-1 is !NaN otherwise do nothing

//replace 000 with square root

// function numHandler (numString) {
//     let lastItem = operationArr[operationArr.legth-1];

//     if (!isNaN(lastItem)) {lastItem.concat(numString)}
//     else {}
// }