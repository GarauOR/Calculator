const btnList = document.querySelectorAll(".column-container > div");
const display = document.querySelector("#display");

btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        let isDisplayable = ["C", "DEL", "="];
        if (!isDisplayable.includes(btn.textContent)) {
            if(!isNaN(btn.textContent)){display.value += btn.textContent }

            else if (btn.textContent === ".") {
                if (display.value[display.value.length-1] === " " ||
                display.value.length < 1){
                    display.value = display.value + "0" + btn.textContent
                }
                else if (!isNaN(display.value[display.value.length-1])) {display.value += btn.textContent}

            }       
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
                    operation(display.value);
                    break;
            }
        }
    });
});

//replace 000 with square root

function operation (operationString) {
    
    if (operable(operationString)) {
        let operationArr = operationString.split(" ");
        console.log(operationArr);
        let index = 0;

        while (index < operationArr.length) {
            if (operationArr[index] === "/" || operationArr[index] === "*") {
                if (operationArr[index] === "/") {
                    const division = operationArr[index-1] / operationArr[index+1];
                    operationArr.splice(index-1,3,`${division}`);
                    index--
                }
                if (operationArr[index] === "*") {
                    const multiplication = operationArr[index-1] * operationArr[index+1];
                    operationArr.splice(index-1,3,`${multiplication}`);
                    index--
                }
            }
            index++
        }
        
        


        // console.log(operationArr);
        //la funzione fa il return del risultato
    }
}

function operable (value) {
    const operableCheck = ["/", "*", "-", "+"];
    let operableResult = false;

    operableCheck.forEach(item => {
        if (value.includes(item)) {
            operableResult = true;
        }
    })

    return operableResult;
}