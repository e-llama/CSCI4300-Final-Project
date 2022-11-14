//----------------------------------------------
// Part 1: Greeting: Click Events
//----------------------------------------------
/*
//buttons
var amButton = document.getElementById("am");
var pmButton = document.getElementById("pm");

//add eventlistener
amButton.addEventListener("click", changeAM);
pmButton.addEventListener("click", changePM);

//AM/PM button eventlistener functions
function changeAM() {
    document.getElementById("greeting").innerHTML = "Good Morning!";
} 
function changePM() {
    document.getElementById("greeting").innerHTML = "Good Night!";
}

//----------------------------------------------
// Part 2: Switch the Background Color
//----------------------------------------------

//buttons
var redButton = document.getElementById("red");
var yellowButton = document.getElementById("yellow");
var greenButton = document.getElementById("green");
var blueButton = document.getElementById("blue");

//add eventlistener
redButton.addEventListener("click", redBG);
yellowButton.addEventListener("click", yellowBG);
greenButton.addEventListener("click", greenBG);
blueButton.addEventListener("click", blueBG);

//background color changing functions
function redBG() {
    document.getElementById("div_color").setAttribute("class", "bg_red");
}
function yellowBG() {
    document.getElementById("div_color").setAttribute("class", "bg_yellow");
}
function greenBG() {
    document.getElementById("div_color").setAttribute("class", "bg_green");
}
function blueBG() {
    document.getElementById("div_color").setAttribute("class", "bg_blue");
}
*/
//----------------------------------------------
// Part 3: Create a Dynamic List
//----------------------------------------------

//-------------
//expand
//-------------

//sign up button popup
function signUp() {
    $("#dialog").dialog();
}

function expandButton(parent) {
    var expandBtn = parent.appendChild(document.createElement("button"));
    expandBtn.innerHTML = "expand";
    expandBtn.setAttribute("class","expand-btn");
    expandBtn.setAttribute("class", "collapsible");
}

function deleteButton(parent) {
    var deleteBtn = parent.appendChild(document.createElement("button"));
    deleteBtn.innerHTML = "delete";
    deleteBtn.setAttribute("class","expand-btn");

    deleteBtn.onclick = function() {
        this.parentElement.remove();
    }}


function collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }
}

//buttons and input box variables
var userInput = document.querySelector("#usrInput");
var inputButton = document.querySelector("#addBtn");
var inputList = document.querySelector("#myUL");

//add eventlistener
inputButton.addEventListener("click", addList);

//add to list function
function addList() {
    let input = userInput.value;
    userInput.value = '';

    var node = document.createElement("li");
    node.setAttribute("class", "flex-item");

    var p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, "
    + "consectetur adipisicing elit, sed do eiusmod tempor"
    + "incididunt ut labore et dolore magna aliqua. Ut enim "
    + "ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo";
    
    p.setAttribute("class", "content");

    node.appendChild(document.createTextNode(input));

    expandButton(node);
    node.appendChild(p);
    deleteButton(node);

    inputList.appendChild(node);
    collapse();
}
collapse();