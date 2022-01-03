let container = document.querySelector('.container')

// default loading set for looping 16 X 16 grid model
for(i=0;i<256;i++){
    let divcell = document.createElement('div')
    divcell.setAttribute('class','cell')
    container.appendChild(divcell)
}

let cells = document.querySelectorAll('.cell')

// adding hover coloring eventlistner
cells.forEach(cell => {
    cell.addEventListener('mouseover',()=>{
        cell.setAttribute('style','background-color:aqua')
    })
});


const btn = document.querySelector('button')

let gridsize


// callback function for retrieving grid size
function question(){
    let x = Number(prompt('Enter your grid size','16'))
    while(x>100 || Number.isNaN(x)){
        x=Number(prompt('Please make the size smaller than 100'))
    }
    gridsize=x
    container.setAttribute('style',`grid-template-columns: repeat(${gridsize},1fr);grid-template-rows: repeat(${gridsize},1fr) `)
}

// another callback function for recalibration

function removeCell(){
    for(i=0;i<100000;i++){
        let cell = document.querySelector('.cell')
        container.removeChild(cell)
    }
}

//  fill it in again
function addCell(){
    for(i=0;i<gridsize*gridsize;i++){
        let divcell = document.createElement('div')
        divcell.setAttribute('class','cell')
        container.appendChild(divcell)
    }
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover',()=>{
            cell.setAttribute('style','background-color:aqua')
        })
    });
}


btn.addEventListener('click',removeCell)
btn.addEventListener('click',question)
btn.addEventListener('click',addCell)


// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
// (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.