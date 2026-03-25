//This function get the task from input
function get_todos() {
    //This creates an arrau of tasks that are inputed
    let todos = new Array;
    //This pulls the task that was saved in the web browser memory
    let todos_str = localStorage.getItem("todo");
    //If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//This function adds the inputed task to the get_todos function array
function add() {
    //This takes the inputed task and creates a variable of it
    let task = document.getElementById("task").value;

    let todos = get_todos();
    //This adds a new task to the end of the array
    todos.push(task);
    //This converts the task input to a JSON string
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//This function keeps the tasks permanently displayed on the screen
function show() {
    //This sets the task that was retrieved as a variable
    let todos = get_todos();
    //This sets up each task as an unordered list
    let html = "<ul>";
    for (let i = 0; i < todos.length; i++) {
        //This also displays the task as a list and creates the button with the "x"
        html += "<li>" + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += "</ul>";
    //This displays the task as a list
    document.getElementById("todos").innerHTML = html;
    //THis tells the borowser how to display the todo array after an item has been removed
    let buttons = document.getElementsByClassName("remove");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", remove);
    };
}
//This displays the inputed task when the "Add item" button is clicked
document.getElementById("add").addEventListener("click", add);
//This will keep the inputs displayed permanently on the screen
show();

function remove(){
    let id = this.getAttribute("id");
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    //This looks in the show() how to display a removed item on the screen
    show();

    return false
}