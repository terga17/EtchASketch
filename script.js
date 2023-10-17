const container = document.querySelector(".container");

function createDiv(amount = 16){
    let i = 0;
    container.style.setProperty("--grid-size", amount);
    while(i < amount * amount){
        let singleDiv = document.createElement("div");
        singleDiv.classList.add("divs");
        container.appendChild(singleDiv);
        i++;
    }
}

createDiv();

const allDivs = document.querySelectorAll(".divs");
addColor(allDivs);

function addColor (allDivs) {
    allDivs.forEach(box => {
    box.addEventListener("mouseleave", () => {
        box.classList.add("hovering");
    });
});
}

function removeGrid(){
    const allDivs = document.querySelectorAll(".divs");
    allDivs.forEach(div => {
        div.remove();
    });
}

const divNum = document.querySelector("#divNum");

divNum.addEventListener("click", () => {
    const squaresNum = window.prompt("How many squares?", "100 max");
    if(squaresNum > 100){
        const squaresNum = window.prompt("The max value is 100");
    }
    removeGrid();
    createDiv(squaresNum);
    const allDivs = document.querySelectorAll(".divs");
    addColor(allDivs);
});