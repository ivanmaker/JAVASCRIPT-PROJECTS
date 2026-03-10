/*Type coercion, attempt to combine to different types of data to see how JS handles conversion of one type to another*/
function Type_Coercion(){
    Coer = 10;
    document.getElementById("type-co").innerHTML = Coer + "ten";
}

/*Testing the isNaN function in JS to see of a value is a number or not*/
function NaN_True(){
    number = 10;
    document.getElementById("nan-true-text").innerHTML = isNaN(number);
}

function NaN_False(){
    text = "ten";
    document.getElementById("nan-false-text").innerHTML = isNaN(text);
}

/*Calculating a positive and negative number beyond what JS is capable of to get Infinity and -Infinty responses*/
function Positive_Infin(){
    document.getElementById("infin").innerHTML = (10E500);
}

function Negative_Infin(){
    document.getElementById("neg-infin").innerHTML = (-10E500);
}

/*Using the < and > comparison operators*/
function Greater_Than_True(){
    document.getElementById("grtr-true").innerHTML = (10 > 5);
}

function Less_Than_False(){
    document.getElementById("grtr-false").innerHTML = (10 < 5);
}


/*Practice with logging to the browser console*/
console.log(10 + 10);

console.log(10 == 10);

console.log(10 == 5);

/*Using the === operator in different ways to get true and false responses*/
function EEE_1(){
    document.getElementById("eee-1").innerHTML = (10 === 10);
}

function EEE_2(){
    document.getElementById("eee-2").innerHTML = ("10" === 15);
}

function EEE_3(){
    document.getElementById("eee-3").innerHTML = ("10" === 10);
}

function EEE_4(){
    document.getElementById("eee-4").innerHTML = (10 === 15);
}

/*Testing how the && and || functions work by evaluating numbers*/
function And_True(){
    document.getElementById("and-true").innerHTML = (10 == 10 && 5 == 5);
}

function And_False(){
    document.getElementById("and-false").innerHTML = (10 == 5 && 5 == 5);
}

function Or_True(){
    document.getElementById("or-true").innerHTML = (10 === 15 || 10 == 10);
}

function Or_False(){
    document.getElementById("or-false").innerHTML = ("ten" === 15 || 10 == 5);
}

/*Using the !(Not) function to get the reverse of a comparison operation*/
function Not_True(){
    document.getElementById("not-true").innerHTML = !(10 == 10);
}

function Not_False(){
    document.getElementById("not-false").innerHTML = !(10 == 5);
}