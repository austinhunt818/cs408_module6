
document.querySelector("button").addEventListener("click", function() {
   alert(document.querySelector('input[name="selection"]:checked').value);
});
