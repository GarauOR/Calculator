const btnList = document.querySelectorAll(".column-container > div");
const display = document.querySelector("#display");

btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        let isDisplayable = ["C", "DEL", "="];
        if (!isDisplayable.includes(btn.textContent)) {
            if(!isNaN(btn.textContent)){display.value += btn.textContent }         
            else {
                if (display.value[display.value.length-1] !== " ") 
                {display.value = display.value + " " + btn.textContent + " "};    
        }}
        else {
            switch (btn.textContent) {
                case "C":
                    display.value = "";
                    break;

                case "DEL":
                    if (display.value[display.value.length-1] === " ")
                    {display.value = display.value.slice(0, display.value.length-3);}
                    else {display.value = display.value.slice(0, display.value.length-1);}
                    break;
                
                case "=":
                    operation();
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