const grid = document.getElementById("grid")
const wipe = document.getElementById("wipe")
const newGrid = document.getElementById("new-grid")

let mouseDown = false
let mouseUp = true

wipe.addEventListener("click", wipeGrid)

newGrid.addEventListener("click", () =>{
    grid.replaceChildren()
    let squareAmount = prompt("Please enter the amount of squares:", "Max squares 100...")
    if(squareAmount > 100){
        squareAmount = 100
    }
    createGrid(squareAmount)
})

addEventListener("mousedown", () => {
    mouseDown = true
    mouseUp = false
})
addEventListener("mouseup", () => {
    mouseDown = false
    mouseUp = true
})

function createGrid(amount){
    console.log("Testing")
    let size = 960 / amount
    for(let x = 0; x < amount; x++){
        for(let y = 0; y < amount; y++){
            const square = document.createElement("div")
            square.classList.add("square")
            square.style.width = `${size}px`
            square.style.height = `${size}px`
            square.addEventListener("mouseover", () =>{
                if(mouseDown){
                    square.style.backgroundColor = "blue"
                }
            })
            grid.appendChild(square)
        }
    }
}

function wipeGrid(){
    let squares = Array.from(document.getElementsByClassName("square"))
    for(square in squares){
        squares[square].style.backgroundColor = "#fff"
    }


}

createGrid(16)