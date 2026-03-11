
/*Global scoped variable to used in the Log_Test function*/
let name = "James";

/*Out puts text to the console*/
function Log_Test(){
    let text = " loves pickles!"
    let sentence = name + text;
    console.log(sentence);
}
Log_Test();

/*Tests local variable scope to show an error in the console because the sentence variable is inaccessible outside the function it's in*/
console.log(sentence);


/*This function gives you a greeting based on the time of the day, uses the Date object*/
function Greetings(){
    if (new Date().getHours() < 18){
        document.getElementById("greetings").innerHTML = "Hope you're having a good day!";
    }
    else{
        document.getElementById("greetings").innerHTML = "Hope you're having a good evening!"
    }
}

/*Testing if/else, could have used a varibale for output text instead of hardcoding it, but this function was simple enough that it didn't seem neccessary*/
function Teller(){
    num = document.getElementById("given-number").value;
    if (num >= 10){
        document.getElementById("given-number-result").innerHTML = "The number you chose is greater than or equal to 10";
    } 
    else{
        document.getElementById("given-number-result").innerHTML = "The number you chose is less than 10";
    }
}

/*This funciton lets you know what it is based on the hour of the day, uses Date.getHours()*/
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