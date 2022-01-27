let boxList = document.querySelectorAll(".box")
boxList = Array.from(boxList)

let currentPlayer = 'x'

for (let i = 0; i < boxList.length; i++) {
    boxList[i].addEventListener('click', displayMove);
}

function displayMove(event) {
    event.target.textContent = currentPlayer;
    switchCurrentPlayer()
}

function switchCurrentPlayer() {
    if (currentPlayer == 'x') {
        currentPlayer = 'o';
    } else if (currentPlayer = 'o') {
        currentPlayer = 'x'
    }
}

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener('click', reset)

function reset() {
    for (let i = 0; i < boxList.length; i++) {
        boxList[i].textContent=''
        currentPlayer = 'x'
    }
}