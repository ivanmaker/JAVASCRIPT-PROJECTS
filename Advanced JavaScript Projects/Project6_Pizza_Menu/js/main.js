function getReceipt(){
    //This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    let text1 = "<h3>You Ordered:</h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");
    // Get the chosen pizza size by cycling through each option and seeing which one is checked
    for (let i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //Depending on which size is chosen add that sizeTotal to the running total
    if (selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza"){
        sizeTotal = 8;
    } else if (selectedSize === "Large Pizza"){
        sizeTotal = 10;
    } else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === "XXL Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    //Log this into the console so we can see the output
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+ text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

//This function loops through all of the topping selections that were checked by the user and pushes them into the toppingArray 
function getTopping(runningTotal, text1){
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName("toppings");
    for (let j = 0; j < toppingArray.length; j++){
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>"//All of the toppings pushed into the toppingArray have their values added to text1 so we can see all of the topping choices
        }
    }
    let toppingCount = selectedTopping.length;//Count through all of the toppings in selectedToppings to get the number of toppings selected
    if (toppingCount > 1){
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);//Add the pizza size to the number of toppings
    //Log it all to the console and pring it to the screen
    console.log("total selected topping item: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};