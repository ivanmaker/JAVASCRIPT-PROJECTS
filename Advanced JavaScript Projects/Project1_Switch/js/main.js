function IC_Flavor(){
    let Flavor_Output = "";
    let Flavor_Choice = document.getElementById("ic-flavor").value;
    let Flavor_Text = ` is a good flavor choice!`;
    switch(Flavor_Choice){
        case "Vanilla":
            Flavor_Output = `Vanilla ${Flavor_Text}`;
        break;
        case "Chocolate":
            Flavor_Output = `Chocolate ${Flavor_Text}`;
        break;
        case "Rocky Road":
            Flavor_Output = `Rocky Road ${Flavor_Text}`;
        break;
        case "Neopolitan":
            Flavor_Output = `Neopolitan ${Flavor_Text}`;
        break;
        case "Coffee":
            Flavor_Output = `Coffee ${Flavor_Text}`;
        break;
        case "Salted Caramel":
            Flavor_Output = `Salted Caramel ${Flavor_Text}`;
        break;
        default:
            Flavor_Output = "You may have mistyped your choice or entered a flavor that isn't on the list. Please enter a new flavor!"
    }
    document.getElementById("ic-flavor-choice").innerHTML = Flavor_Output;
}

window.addEventListener("click", function(){
        document.getElementById("event-listener").innerHTML = "Listening!";
});


let screenWidth = innerWidth;
let screenHieght = innerHeight;
document.getElementById("screen-wh").innerHTML = `The width of the screen is ${screenWidth} and the screen height is ${screenHieght}!`;

click = document.getElementsByClassName("new-way");
click[0].innerHTML = "You printed this text out via getElementsByClassName!";


const canvas = document.getElementById("image");
const ctx = canvas.getContext("2d");
const image = document.getElementById("dog");
const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
grd.addColorStop(0, "rgba(255, 0, 0, 1)");
grd.addColorStop(1, "rgba(255, 0, 0, 0)");

image.addEventListener("load", (e) => {
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 300, 300);
});