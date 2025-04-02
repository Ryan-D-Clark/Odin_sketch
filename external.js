const grid = document.getElementById("grid")
const wipe = document.getElementById("wipe")

let mouseDown = false
let mouseUp = true

wipe.addEventListener("click", wipeGrid)

addEventListener("mousedown", () => {
    mouseDown = true
    mouseUp = false
})
addEventListener("mouseup", () => {
    mouseDown = false
    mouseUp = true
})

for(let x = 0; x < 16; x++){
    for(let y = 0; y < 16; y++){
        const square = document.createElement("div")
        square.classList.add("square")
        square.addEventListener("mouseover", () =>{
            if(mouseDown){
                square.style.backgroundColor = "blue"
            }
        })
        grid.appendChild(square)
    }
}

function wipeGrid(){
    let squares = Array.from(document.getElementsByClassName("square"))
    for(square in squares){
        squares[square].style.backgroundColor = "#fff"
    }


}