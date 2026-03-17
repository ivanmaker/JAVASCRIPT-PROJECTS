//Check to see if any inputs were left blank. Didn't use "required" in html to practice form validation

function validify() {
    let form_name = document.forms["role-form"]["name"].value;
    if (form_name == "") {
        alert("Please enter a name");
        return false;
    }
    let form_class = document.forms["role-form"]["Class"].value;
    if (form_class == "") {
        alert("Please choose a class");
        return false;
    }
}