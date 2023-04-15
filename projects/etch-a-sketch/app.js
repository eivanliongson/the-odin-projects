
let rows = document.querySelectorAll('.row.container');
let defaultColor = "red";
console.log(rows.length);


for (const row of rows) {
    for (let i = 0; i < 16; i++) {
        let squares = document.createElement("div");
        squares.className = "square";
        row.appendChild(squares);
    }
}

let squares = document.querySelectorAll(".square")

for (const square of squares) {
    square.addEventListener("mouseover", function () {
        square.style.backgroundColor = defaultColor;
    })
}


const btn = document.querySelector('button');

btn.addEventListener("click", function () { 
    for (const square of squares) {
        square.style.backgroundColor = "black";
    }
});