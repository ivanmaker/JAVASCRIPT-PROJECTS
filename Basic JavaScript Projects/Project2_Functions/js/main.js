/*This function targets an ID set to a p tag in index.html and is triggered by a button click to change the p tags text content and color*/
function change_text_color() {
    testVariable = document.getElementById("text-color");
    testVariable.style.color = "red";
    testVariable.innerHTML = "Wow!"
}