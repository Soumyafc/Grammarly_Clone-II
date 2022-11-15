//console.log("hello");
let card = document.getElementById("two");
let card1 = document.getElementById("three");
let downloadIcon = document.getElementById("down-ico");
let trashIcon = document.getElementById("trash-ico");
let downloadIcon1 = document.getElementById("down-icon");
let trashIcon1 = document.getElementById("trash-icon");
card.addEventListener("mouseover", () => {
    downloadIcon.style.opacity = "1";
    trashIcon.style.opacity = "1";
})
card.addEventListener("mouseout", () => {
    downloadIcon.style.opacity = "0";
    trashIcon.style.opacity = "0";
})
card1.addEventListener("mouseover", () => {
    downloadIcon1.style.opacity = "1";
    trashIcon1.style.opacity = "1";
})
card1.addEventListener("mouseout", () => {
    downloadIcon1.style.opacity = "0";
    trashIcon1.style.opacity = "0";
})


