const container = document.querySelector(".container");

function createDiv(amount = 32){
    let i = 0;
    container.style.setProperty("--grid-size", amount);
    container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`; // Adjust grid columns
    container.style.gridTemplateRows = `repeat(${amount}, 1fr)`; // Adjust grid rows
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
    const squaresNum = window.prompt("How many squares?", "32 max");
    if(squaresNum > 32){
        const squaresNum = window.prompt("The max value is 32");
    }
    removeGrid();
    createDiv(squaresNum);
    const allDivs = document.querySelectorAll(".divs");
    addColor(allDivs);
});