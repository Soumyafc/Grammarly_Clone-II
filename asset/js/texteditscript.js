let optionsButtons = document.querySelectorAll(".option-button");

let advancedOptionButtons = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");

let fontSizeRef = document.getElementById("fontSize");

let writingArea = document.getElementById("text-input");

let linkButton = document.getElementById("createLink");

let alignButtons = document.querySelectorAll(".align");

let spacingButtons = document.querySelectorAll(".spacing");

let formatButtons = document.querySelectorAll(".format");

let scriptButtons = document.querySelectorAll(".script")

//list of fontlist
let fontList =
    [
        "Arial",
        "Verdana",
        "Times New Roman",
        "Garamond",
        "Georgia",
        "Courier New",
        "Cursive"
    ];

//Initial settings

const initializer = () => {
    //fun call for highlighting buttons
    //no highlight for link, unlink, lists, undo, redo cause they are one time operation

    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, true);
    highlighter(scriptButtons, true);
};


//highlight clicked 
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            //needsRemoval = true means only one button be highlight and other would be normal
            
            if (needsRemoval) {
                let alreadyActive = false;


                //if currently clicked button is already active

                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                //remove highlight from other button

                highlighterRemover(className);
                if (!alreadyActive)
                {
                    button.classList.add("active");    
                }
            }
            else
            {
                 //if other button 
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = initializer();