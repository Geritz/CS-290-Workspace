/*****************************************************
**  Filename: script.js
**  Author: Spencer Moran
**  Date: 10/29/2016
**  Class: CS290 Web Development
**  Description: Building a webpage with Javascript.
******************************************************/
//Create table
var addTable = document.createElement("table");
addTable.id = "dyntable";
addTable.style.border = "1px solid black"

//Create header row
var row1 = document.createElement('tr');
var header1 = document.createElement('th');
var header2 = document.createElement('th');
var header3 = document.createElement('th');
var header4 = document.createElement('th');
header1.textContent = "Header1";
header2.textContent = "Header2";
header3.textContent = "Header3";
header4.textContent = "Header4";
row1.appendChild(header1);
row1.appendChild(header2);
row1.appendChild(header3);
row1.appendChild(header4);
addTable.appendChild(row1);

//Create first row
var row2 = document.createElement('tr');
row2.id = "topRow";
var item1 = document.createElement('td');
item1.className = "lCol";
var item2 = document.createElement('td');
var item3 = document.createElement('td');
var item4 = document.createElement('td');
item4.className = "rCol";
item1.textContent = "1, 1";
item2.textContent = "2, 1";
item3.textContent = "3, 1";
item4.textContent = "4, 1";
row2.appendChild(item1);
row2.appendChild(item2);
row2.appendChild(item3);
row2.appendChild(item4);
addTable.appendChild(row2);

//Create second row
var row3 = document.createElement('tr');
var item5 = document.createElement('td');
item5.className = "lCol";
var item6 = document.createElement('td');
var item7 = document.createElement('td');
var item8 = document.createElement('td');
item8.className = "rCol";
item5.textContent = "1, 2";
item6.textContent = "2, 2";
item7.textContent = "3, 2";
item8.textContent = "4, 2";
row3.appendChild(item5);
row3.appendChild(item6);
row3.appendChild(item7);
row3.appendChild(item8);
addTable.appendChild(row3);

//Create third row
var row4 = document.createElement('tr');
row4.id = "botRow";
var item9 = document.createElement('td');
item9.className = "lCol";
var item10 = document.createElement('td');
var item11 = document.createElement('td');
var item12 = document.createElement('td');
item12.className = "rCol";
item9.textContent = "1, 3";
item10.textContent = "2, 3";
item11.textContent = "3, 3";
item12.textContent = "4, 3";
row4.appendChild(item9);
row4.appendChild(item10);
row4.appendChild(item11);
row4.appendChild(item12);
addTable.appendChild(row4);

//Add the table to the page.
document.body.appendChild(addTable);

//Create buttons
var leftButton = document.createElement('button');
leftButton.textContent = "LEFT";
leftButton.id = "leftButton";
document.body.appendChild(leftButton);

var upButton = document.createElement('button');
upButton.textContent = "UP";
upButton.id = "upButton";
document.body.appendChild(upButton);

var downButton = document.createElement('button');
downButton.textContent = "DOWN";
downButton.id = "downButton";
document.body.appendChild(downButton);

var rightButton = document.createElement('button');
rightButton.textContent = "RIGHT";
rightButton.id = "rightButton";
document.body.appendChild(rightButton);

var markCell = document.createElement('button');
markCell.textContent = "MARK CELL";
markCell.id = "markButton";
document.body.appendChild(markCell);

//Create cell tracker
var currentCell = document.getElementById("topRow").firstElementChild;
currentCell.style.border = "2px solid black";

//Function - permanently turns the currentCell yellow
function markIt(event) {
    currentCell.style.backgroundColor = "yellow";
    event.stopPropogation();
}

//Function - goes down a row if not on the bottom row.
function buttonDown(event) {
    if (currentCell.parentNode.id !== "botRow") {
            currentCell.style.border = "none";
            currentCell = currentCell.parentNode.nextElementSibling.firstChild;
            currentCell.style.border = "2px solid black";
            event.stopPropogation();
        }
}

//Function - goes up a row if not on the top row
function buttonUp(event) {
    if (currentCell.parentNode.id !== "topRow") {
            currentCell.style.border = "none";
            currentCell = currentCell.parentNode.previousElementSibling.firstChild;
            currentCell.style.border = "2px solid black";
            event.stopPropogation();
        }
}

//Function - nudges the selection to the right.
function buttonRight(event) {
    if (currentCell.className !== "rCol") {
        currentCell.style.border = "none";
        currentCell = currentCell.nextElementSibling;
        currentCell.style.border = "2px solid black";
        event.stopPropogation();
    }
}

//Function - Shimmies the selection to the left.
function buttonLeft(event) {
    if (currentCell.className !== "lCol") {
        currentCell.style.border = "none";
        currentCell = currentCell.previousElementSibling;
        currentCell.style.border = "2px solid black";
        event.stopPropogation();
    }
}
//Add event listeners.
document.getElementById("markButton").addEventListener("click", markIt);

document.getElementById("upButton").addEventListener("click", buttonUp);

document.getElementById("downButton").addEventListener("click", buttonDown);

document.getElementById("rightButton").addEventListener("click", buttonRight);

document.getElementById("leftButton").addEventListener("click", buttonLeft);