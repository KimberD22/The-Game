alert("Do you love donuts or pizza? It is time to pick a side, Dougie and Pizza Rat are at it again, arguing over which dough is the best. Would you like to join in the fun. Play a few rounds of tic tac dough to see who can claim they have the best dough if you want to play just press ok.")
alert("Game on, PizzaPlayerX you are first")
//add event listeners
//in my research for the game, I learned that load can be used here, but DOMContentLoaded is more 
//appropriate. DOMContentLoaded helps optimize loading of stylesheets by making JavaScript asynchronous.
//per MDN -Document:DOMContentLoaded event page 
//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
//use query selectors to add functionality to the div
document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelectorAll(".block div")
    const playerDisplay = document.querySelector("#pizzaPlayerX")
    let currentPlayer ='pizzaPlayerX'

    square.forEach(square => {
        square.addEventListener("click", clickedBox)
    })
    function clickedBox(e) {
        const squareArray = Array.from(square)
        const index = squareArray.indexOf(e.target)
        //shows which squares are being clicked on
        console.log(index)
        playerDisplay.innerHTML = currentPlayer

        if(currentPlayer === "pizzaPlayerX") {
            square[index].classList.add("pizzaPlayerX")
          currentPlayer ="donutPlayerO"  
        } else {
            square[index].classList.add("donutPlayerO")
            currentPlayer = "pizzaPlayerX"
        }
    }

})
