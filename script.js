const container = document.querySelector(".container");
const rmvBtn = document.querySelector("#rmvLine")
const clear = document.querySelector("#clear")
const erase = document.querySelector("#erase")
const rgb = document.querySelector("#rgb");

let rgbMode = false;


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
    box.addEventListener("mouseenter", () => {
        if(rgbMode){
            const randomClr = randomColor();
            box.style.backgroundColor = randomClr;
        } else {
            box.style.backgroundColor = "";
            box.classList.add("hovering");
        }
    });
});
}

function randomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
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

rmvBtn.addEventListener("click", () => {
    const allDivs = document.querySelectorAll(".divs, .divNoLine");
    allDivs.forEach(div => {
        div.classList.toggle("divNoLine");
        div.classList.toggle("divs");
    });
});

clear.addEventListener("click", () => {
    const allDivs = document.querySelectorAll(".divs, .divNoLine");
    allDivs.forEach(div => {
        div.style.backgroundColor = ""; 
        div.classList.remove("hovering");
    });
});

rgb.addEventListener("click", () => {
    rgbMode = !rgbMode;
    if(rgbMode){
        rgb.style.backgroundColor = "pink";
    } else{
        rgb.style.backgroundColor = "";
    }
});


