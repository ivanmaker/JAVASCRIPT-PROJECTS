
/*Uses the Ternary operator to make a branching choice as to what text is displayed*/
function Vote_Function(){
    var Age;
    var Can_vote;
    Height = document.getElementById("age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote";

}

/*Object constructor for Vehicle*/
function Vehicle (Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

/*Instantiated Vehicle objects*/
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Tail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Isaac = new Vehicle("Honda", "Fit", 2012, "Grey");

/*The following two functions use the Vehicle objects created from the constructor to created text based on the values in the KVPs inside the Vehicle object*/
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myOtherFunction(){
    document.getElementById("key-and-constr").innerHTML = "Isaac drives a " + Isaac.Vehicle_Color + "-colored " + Isaac.Vehicle_Model + " manufactured in " + Isaac.Vehicle_Year;
}

/*Testing nested functions*/
function Nested(){
    document.getElementById("nested").innerHTML = Concat();
    function Concat(){
        var text = "Here's some text"
        function Ination(){
            text += " and here's some addtional text added on to it"
        }
        Ination();
        return text;
    }
}