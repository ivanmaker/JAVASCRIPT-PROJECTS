/*The myDictionary function defines the Adventurer object and assigns several KVPs to be used in setting text in a p tag in index.html. The value being sent to the p tag is deleted before it is sent to the p tag on purpose to demonstrate what would happen*/

function myDictionary(){
    var Adventurer = {
        Class: "Theif",
        Armor: "Tunic",
        Weapon: "Knife",
        Skill: "Pick Lock"
    };
    delete Adventurer.Skill;
    document.getElementById("dictionary").innerHTML = Adventurer.Skill;
}