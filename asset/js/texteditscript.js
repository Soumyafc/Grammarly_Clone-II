let optionsButtons = document.querySelectorAll(".option-button");

let advancedOptionButtons = document.querySelectorAll(".adv-option-button");

let writingArea = document.getElementById("text-input");

let linkButton = document.getElementById("createLink");

let alignButtons = document.querySelectorAll(".align");

let spacingButtons = document.querySelectorAll(".spacing");

let formatButtons = document.querySelectorAll(".format");

let scriptButtons = document.querySelectorAll(".script")


//Initial settings

const initializer = () => {
    //fun call for highlighting buttons
    //no highlight for link, unlink, lists, undo, redo cause they are one time operation

    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, true);
    highlighter(scriptButtons, true);
};
//main logic

const modifyText = (command, defaultUi, value) => {
    //execCommand executes command on selected text
    
    document.execCommand(command, defaultUi, value);

};

//for basic operations who don't need value parameter

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

//options that require value parameter (e.g colors , fonts)

advancedOptionButtons.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    })
})

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
})

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

optionsButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        let detailsTab = button.firstElementChild;
        //console.log(detailsTab);
        detailsTab.style.display = "block";
    });

});
optionsButtons.forEach((button) => {
    button.addEventListener("mouseout", () => {
        let detailsTab = button.firstElementChild;
        //console.log(detailsTab);
        detailsTab.style.display = "none";
    });

});

let linkBtn = document.querySelector("#createLink");
linkBtn.addEventListener("mouseover", () => {
    let details = linkBtn.firstElementChild;
    details.style.display = "block";
});
linkBtn.addEventListener("mouseout", () => {
    let details = linkBtn.firstElementChild;
    details.style.display = "none";
});
// writingArea.addEventListener('focus', () => {
//     let placeholder = writingArea.firstElementChild;
//     placeholder.style.display = "none";
// });
// writingArea.addEventListener('blur', () => {
//     let placeholder = writingArea.firstElementChild;
//     if (!(writingArea.innerText == '')) {
       
//         console.log("placeholder inactive");
       
//     } else {
//         placeholder.style.display = 'block';
//     }
// })

//NO. of words counter
let char = 0;
let totalCount = document.querySelector(".char-count");
const updateCounter = () => {
    let str = writingArea.innerText;
    
    
        const charArr = str.split(' ');
        char = charArr.filter(word => word !== ' ').length;
    
    if (char === 1 && charArr[0] === '') {
 
        
        totalCount.innerHTML = 0 + " " + "word(s)";
    }
    else {
        totalCount.innerHTML = char + " " + "word(s)";
    }
    

}
writingArea.addEventListener('keyup', () => updateCounter());

let hiddenFileInput;
document.querySelectorAll('.file-upload_button').forEach((button) => {
    hiddenFileInput = button.parentElement.querySelector('.file-upload_input');

    button.addEventListener("click", () => {
        hiddenFileInput.click();
    });
});

const loadFile = () => {
    let file = hiddenFileInput.files[0];
    if (!file) return;
    let url = URL.createObjectURL(file);
    return url;
}
hiddenFileInput.onclick = reqData;
function output(data)
{
    //console.log(data);
    //console.log(this.responseText);
    //textBox.innerHTML = '';
    writingArea.innerHTML = this.responseText;

}
function reqData() {
    let url = loadFile();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', output);
    xhr.open('GET', url);
    xhr.send();
    // window.location.href = 'http://localhost:8000/texteditor';

}

window.onload = initializer();