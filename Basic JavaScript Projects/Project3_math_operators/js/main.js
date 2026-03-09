/*This function targets the "add-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function add() {
    let x = 10 + 10;
    document.getElementById("add-math").innerHTML = x;
}

/*This function targets the "sub-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function subtract() {
    let x = 10 - 10;
    document.getElementById("sub-math").innerHTML = x;
}

/*This function targets the "mult-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function multiply() {
    let x = 10 * 10;
    document.getElementById("mult-math").innerHTML = x;
}

/*This function targets the "div-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function divide() {
    let x = 10 / 10;
    document.getElementById("div-math").innerHTML = x;
}

/*This function targets the "all-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function allMath() {
    let x = 10 / 9 * 8 + 7 - 6;
    document.getElementById("all-math").innerHTML = x;
}

/*This function targets the "mod-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function modulus() {
    let x = 10 % 9;
    document.getElementById("mod-math").innerHTML = x;
}

/*This function targets the "neg-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function negation() {
    let x = 10;
    document.getElementById("neg-math").innerHTML = -x;
}

/*This function targets the "inc-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function increment() {
    let x = 10;
    document.getElementById("inc-math").innerHTML = ++x;
}

/*This function targets the "dec-math" ID set to a p tag in index.html and is triggered by a button click to change the p tags text content the outcome of the math operation*/
function decrement() {
    let x = 10;
    document.getElementById("dec-math").innerHTML = --x;
}

/*This function is triggered by a button click to display an alert message of a random number*/
function randomNumber() {
    window.alert(Math.random() * 10);
}

/*This function is triggered by a button click to display an alert message with value of PI*/
function piMath() {
    window.alert(Math.PI);
}