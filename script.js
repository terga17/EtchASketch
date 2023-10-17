const container = document.querySelector(".container");

function createDiv(){
    let i = 0;
    while(i < 256){
        let singleDiv = document.createElement("div");
        singleDiv.classList.add("divs");
        container.appendChild(singleDiv);
        i++;
    }
}

createDiv();

const allDivs = document.querySelectorAll(".divs");

allDivs.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("hovering");
    });
});
