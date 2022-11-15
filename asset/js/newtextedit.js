
const textarea = document.getElementById("textarea");
let inputNum = document.getElementById("font-size");

function f1(e)
{
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e)
{
    if (textarea.style.fontWeight == "bold")
    {
        textarea.style.fontWeight = "normal"; 
        e.classList.remove("active");
    } else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}
function f3(e)
{
    if (textarea.style.fontStyle == "italic")
    {
        textarea.style.fontStyle = "normal";  
        e.classList.remove("active");
    } else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e)
{
    if (textarea.style.textDecoration == "underline")
    {
        textarea.style.textDecoration = "none";  
        e.classList.remove("active");
    } else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}
function f5(e)
{
    textarea.style.textAlign = "left";
}
function f6(e)
{
    textarea.style.textAlign = "center";
}
function f7(e)
{
    textarea.style.textAlign = "right";
}

function f8(e)
{
    if (textarea.style.textTransform == "uppercase")
    {
        textarea.style.textTransform = "none";  
        e.classList.remove("active");
    } else {
         textarea.style.textTransform = "uppercase"; 
        e.classList.add("active");
    }
}

function f9(e)
{
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.transform = "capitalize";
    textarea.value = "";
    inputNum.value = "16";
}

function f10(e)
{
    let value = e.value;
    textarea.style.color = value;
}

window.addEventListener("load", () => {
    textarea.value = "";
})

let switchMode = document.querySelector('.dark-mode');
let details = document.querySelector('.details')
let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let body = document.querySelector("body");
let col = document.querySelectorAll(".col");
let textSize = document.querySelector("#font-size");
let section = document.querySelector(".section");
let boxes = document.querySelectorAll(".box"); 
let title = document.querySelector("#doc-title");
let saveBtn = document.querySelector("#btn-save");

switchMode.addEventListener("mouseover", () => {
    details.classList.remove('hidden');
});
switchMode.addEventListener("mouseout", () => {
    details.classList.add('hidden');
});


//switching to dark or light mode 
switchMode.addEventListener('click', () => {
    if (details.innerHTML == "switch to dark mode") {
        moon.classList.add('hidden');
        sun.classList.remove('hidden');
        details.innerHTML = "switch to light mode";
        details.style.background = "#fff";
        details.style.color = "black";
        switchMode.style.background = "#fff";
        switchMode.style.color = "#000";
        body.style.background = "#292929";
        section.style.background = "#4C4C4C";
        textSize.style.background = "#4C4C4C";
        textarea.style.background = "#4C4C4C";
        textarea.style.color = "#fff";
        col.forEach((c) => {
            c.style.background = "#4C4C4C";
            c.style.boxShadow = "#fff 0px -1px 12px";
        });
        boxes.forEach((box) => {
            box.classList.add("second-dark-mode");
        });
        boxes[3].classList.remove('second-dark-mode');
        title.style.background = "#4C4C4C";
        title.style.color = "#fff";
        saveBtn.classList.add("btnsave");
    }
    else
    {
        moon.classList.remove('hidden');
        sun.classList.add('hidden');
        details.innerHTML = "switch to dark mode";
        details.style.background = "#000";
        details.style.color = "#fff";
        switchMode.style.background = "#000";
        switchMode.style.color = "#fff";
        body.style.background = "#f5f5f5";
        col.forEach((c) => {
            c.style.background = "#fff";
            c.style.boxShadow = "#00000059 0px 5px 15px";
        });
        section.style.background = "#fff";
        textSize.style.background = "#fff";
        textarea.style.background = "#fff";
        textarea.style.color = "#000";
        boxes.forEach((box) => {
            box.classList.remove("second-dark-mode");
        });
        title.style.background = "#fff";
        title.style.color = "#000";
        saveBtn.classList.remove("btnsave");
    }
})