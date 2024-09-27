
function alertSelection() {
   alert(document.querySelector('input[name="selection"]:checked').value);
}

document.querySelector("button").addEventListener("click", alertSelection);


