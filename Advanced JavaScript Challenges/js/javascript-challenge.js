function BitWise() {
    let x = 5;
    let y = 3
    if (x & 1) {
        ++x;
        console.log(x);
        if (x | y) {
            ++x;
            if (x ^ y) {
                document.getElementById('bitWise').innerHTML = 'BITWISE!';
            }
        }
    }
}

function TextSearch() {
    let text = 'A a B b C c D d E e F f G g';
    let matchReg = text.match(/A|a|D|b|g/g);
    let replace = text.replace(/A|a/g, 'Apple');
    document.getElementById('textSearch').innerHTML =
        `This is the match() function using a regEx -${matchReg}-, and this is the replace() function -${replace}-`;
}

'use strict';
function Validation() {
    const outputTextText = document.getElementById("outputText");
    outputText.innerHTML = "";
    let x = document.getElementById("inputText").value;
    try {
        if (x.trim() == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
        document.getElementById('outputText').innerHTML = 'You chose a number between 5 and 10'
    } catch (err) {
        outputText.innerHTML = "Input is " + err;
    }
    finally {
        const appendText = document.createElement('p');
        appendText.id = 'appendText';
        appendText.textContent = "Thanks for playing!";
        document.body.appendChild(appendText);
    }
}

class coolGuy {
    constructor() {
        this.killerShades = 'Raybands';
        this.jeans = 'expensive jeans';
        this.shoes = 'unscuffed shoes';
        this.name = 'something basic';
        this.hobbies = 'some kind of "maxxing"';
    }
}

function Person() {
    let chaz = new coolGuy();
    let add = (x, y) => x + y;
    let addition = add(5, 6);
    if (Number.isNaN(addition)) {
        console.log('x or y is NaN');
        debugger;
    }
    if (!Number.isInteger(addition)) {
        console.log('x or y is not an integer');
        debugger;
    }
    if (isFinite(addition)){
        console.log('is not infinite');
    }
    document.getElementById('person').innerHTML =
        `What's your name? Probably ${chaz.name}, like Chaz. What do you like to wear, ${chaz.jeans} and ${chaz.shoes} shoes? ${addition}`;
}

function findIndex(){
    let numberArray = [2, 2, 4, 4, 5, 6, 6, 8, 8, 10];
    let arrayIndex = numberArray.findIndex(function (element){return element > 5;});
    document.getElementById('numArray').innerHTML = `The number at array index 5 is: ${arrayIndex}`;
}

function raiseExp(){
    let raised = 2 ** 4;
    document.getElementById('raisedExp').innerHTML = `2 raised to the power of 4 is: ${raised}`;
}