
let name = "James";

function Log_Test(){
    let text = " loves pickles!"
    let sentence = name + text;
    console.log(sentence);
}
Log_Test();
console.log(sentence);


function Greetings(){
    if (new Date().getHours() < 18){
        document.getElementById("greetings").innerHTML = "Hope you're having a good day!";
    }
    else{
        document.getElementById("greetings").innerHTML = "Hope you're having a good evening!"
    }
}

function Teller(){
    num = document.getElementById("given-number").value;
    if (num >= 10){
        document.getElementById("given-number-result").innerHTML = "The number you chose is greater than or equal to 10";
    } 
    else{
        document.getElementById("given-number-result").innerHTML = "The number you chose is less than 10";
    }
}

function Time_Function(){
    let Time = new Date().getHours();
    let Reply = "";
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "It is evening time.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("time-of-day").innerHTML = Reply;
}