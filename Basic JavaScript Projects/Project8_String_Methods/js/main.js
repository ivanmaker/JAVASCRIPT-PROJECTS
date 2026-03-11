/*Uses the Concat() method to combine multiple strings into one*/
function Sentence(){
    let first = "These";
    let second = " Go";
    let third = " Together!";
    let combined = first.concat(second, third);
    document.getElementById("join-words").innerHTML = combined;
}

/*Uses the Slice() method to extract a specific value from a string of text*/
function Text_Slice(){
    let allWords = "These Go Together!"
    let go = allWords.slice(6, 8);
    document.getElementById("sliced-text").innerHTML = go;
}

/*Uses the toUpperCase() method to change all letter character in a string to uppercase*/
function Toupper_Case(){
    let toupper = "These Go Together!";
    let uppered = toupper.toUpperCase();
    document.getElementById("to-upper").innerHTML = uppered; 
}

/*Uses the Search() function to find what character number something starts at in string*/
function Searcher(){
    let searchText = "These Go Together!";
    let searchResult = searchText.search("Go");
    document.getElementById("search-text").innerHTML = searchResult;

}

/*Uses toString() to change a number into a string value*/
function Stringer(){
    let number = 10;
    document.getElementById("stringed-number").innerHTML = number.toString();

}

/*Uses the toPrecision() method to truncate a float down to a specific amount of places to the right of the deicmal*/
function Prec(){
    let prec_num = 10.123456789;
    document.getElementById("prec-number").innerHTML = prec_num.toPrecision(5);

}

/*Uses the toFixed() method to truncate a float down to a specific amount of places to the right of the deicmal*/
function Fixed(){
    let fix_num = 10.123456789;
    document.getElementById("fixed-number").innerHTML = fix_num.toFixed(3);
}

/*Uses the valueOf() method to convert a value to its primative form*/
function Value(){
    let val_text = "String";
    document.getElementById("val-text").innerHTML = val_text.valueOf();
}