
let width = 0;
const progress = document.querySelector("#progress")
const btnNext = document.querySelector("#next")
const btnPrev = document.querySelector("#prev")

btnNext.addEventListener('click', () => {
    if(width < 92){
        width += 31;
        progress.style.width = `${width}%`;
        btnPrev.removeAttribute("disabled");
    }
});

btnPrev.addEventListener('click', () => {
    width -= 31;
    progress.style.width = `${width}%`;
    if(width < 31){
        btnPrev.setAttribute("disabled", "");
    }
});