function textPush() {
    //Step 1: setup the XML HTTP requeat opject
    let textPush = new XMLHttpRequest();

    //Function to display user input value once request has been recieved
    textPush.onload = function () {
        document.getElementById("text").innerHTML;
    }

    //Step 2: prepare the type of request and what to request from the server
    textPush.open("GET", "content.html", true);

    //Step 3: defines the AJAX response callback method that establishes weather the response was successful and where the data should be displayed
    textPush.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("someText").innerHTML = textPush.responseText;
        }
    };

    //Step 4: Send the request
    textPush.send();
}
