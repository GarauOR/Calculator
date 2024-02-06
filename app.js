const btnList = document.querySelectorAll(".column-container > div");


btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        let btnRef = +btn.textContent;
        if (btnRef === !NaN) {numHandler(btnRef)}
        else {operatorHandler(btn.textContent)}
    });
});