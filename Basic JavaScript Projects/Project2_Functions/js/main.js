/*This function targets an ID set to a p tag in index.html and is triggered by a button click to change the p tags text content and color*/
function change_text_color() {
    testVariable = document.getElementById("text-color");
    testVariable.style.color = "red";
    testVariable.innerHTML = "Wow!"
}

/*Variables used in teh concat_text function*/
text1 = "The first part - followed by - ";
text2 = "the second part";

/*Function to concatinate text and display it when the text in p tag is clicked on*/
function concat_text(){
document.getElementById("concat").innerHTML = text1 + text2;
}