//Function to test using a While loop, prints a string and an iterating number to demonstrait the loop. Also print the length of character that get printed out
function Call_While() {
    let Tik_Tok_Videos = `0`;
    let Print_Text = "";
    while (Tik_Tok_Videos < 11) {
        Print_Text += `You've watched ${Tik_Tok_Videos} Tik Tok videos today! <br>`;
        ++Tik_Tok_Videos;
    }
    document.getElementById("while-loop").innerHTML = Print_Text;
    document.getElementById("string-length").innerHTML = Print_Text.length;
}

//This practices the For loop by creating an array and outputting the contents of it by printing each element in the array
let For_Text = "";
let Incra = 0;
let Outfit = ["Hat", "Shirt", "Pants", "Suspenders", "Overshirt", "Socks", "Shoes", "Jacket"];
function Call_For() {
    for (Incra = 0; Incra < Outfit.length; Incra++) {
        For_Text += Outfit[Incra] + "<br>";
    }
    document.getElementById("for-loop").innerHTML = For_Text;
}

//Further work with a While loop and an array to print out each value as it loops through it
let Weapon_Array = ["Sword", "Axe", "Mace", "Flail", "Knife"];
let x = 0;
let Text_Array = "";
function Func_Array() {
    while (x < 5) {
        Text_Array += "You found a cool " + Weapon_Array[x] + " in your inventory!" + "<br>";
        x++;
    }
    document.getElementById("array").innerHTML = Text_Array;
}

//Practice using the const keyword to generate an object, update it values and printing out a sentence that accesses different KVPs in it
function Constant_Function() {
    const Cup = { Handle: "Yes", Shape: "Cylindar", Color: "Blue", Size: "Medium" };
    Cup.Size = "Large";
    Cup.Shape = "Square";
    document.getElementById("constant").innerHTML = "Does this cup have a handle? " + Cup.Handle + "<br>What color is this cup? " + Cup.Color + "<br>What shape is this cup? " + Cup.Shape + "<br>What size is this cup? " + Cup.Size;
}


//Practice using return in a function to out put and concatinate text 
document.getElementById("text-return").innerHTML = Text_Return("The First Part");
function Text_Return(text) {
    return text + " - The Second Part";
}


//Practice with creating an creating an object and printing out a sentence using its KVPs
const Apple = {
    Variety: "Comsmic Crisp",
    Color: "Red",
    Type: "Fresh Eating",
    Description: function () {
        return "The variety of this apple is " + Apple.Variety + " it was created for " + Apple.Type + " and is typically " + Apple.Color + " in color";
    }
};
document.getElementById("apple").innerHTML = Apple.Description();


//Practice using the continue and break keywords in a function. This function skips 5 and 10 as it iterates through the loop
function Continue_Break(){
    let i;
    let text = "";
    for (i = 0; i < 10; i++){
        if (i == 5){
            continue;
        }
        if (i == 10){
            break;
        }
        text += "The current iteration is " + i + "<br>";
    }
    return document.getElementById("continue-break").innerHTML = text;
}
