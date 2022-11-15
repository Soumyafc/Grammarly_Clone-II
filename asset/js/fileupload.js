//console.log("hello from file upload js");
let hiddenFileInput = "";
let textBox = document.querySelector('.text-input');
document.querySelectorAll('.file-upload_button').forEach((button) => {
    hiddenFileInput = button.parentElement.querySelector('.file-upload_input');

    button.addEventListener("click", () => {
        hiddenFileInput.click();
    })
})

const loadFile = () => {
    let file = hiddenFileInput.files[0];
    if (!file) return;
    let url = URL.createObjectURL(file);
    return url;
}

hiddenFileInput.onclick = reqData;

function output(data)
{
    console.log(data);
    console.log(this.responseText);
    //textBox.innerHTML = '';
    textBox.innerHTML = this.responseText;

}
function reqData() {
    let url = loadFile();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', output);
    xhr.open('GET', url);
    xhr.send();
    // window.location.href = 'http://localhost:8000/texteditor';

}
