let btnUCase = document.getElementById("upper-case");
let btnLCase = document.getElementById("lower-case");
let btnPCase = document.getElementById("proper-case");
let btnSCase = document.getElementById("sentence-case");
let btnSave = document.getElementById("save-text-file");

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

btnUCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.toUpperCase();
});

btnLCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.toLowerCase();
});

btnPCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(' ');
});

btnSCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.split('. ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join('. ');
});

btnSave.addEventListener("click", function() {
    download("text.txt",document.getElementById("text").value);
});