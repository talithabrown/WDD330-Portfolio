
function loadAffirmations() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith("A")) {
            let item = localStorage.getItem(localStorage.key(i))
            buildAffirmationsDiv(item, localStorage.key(i));
        }
    }
}

function buildAffirmationsDiv(affirmation, key) {
    let allDiv = document.getElementById("my-affirmations-div")
    let div = document.createElement("div")
    div.classList.add("single-affirmation-div")
    let p = document.createElement("p")
    let hr = document.createElement("hr")

    let button = document.createElement("button")
    button.innerHTML = "remove"
    button.addEventListener("click", () => removeAffirmation(div, key))

    p.innerHTML = affirmation

    div.appendChild(hr)
    div.appendChild(p)
    div.appendChild(button)
    allDiv.appendChild(div)
    
}

function removeAffirmation(div, key) {
    let allDiv = document.getElementById("my-affirmations-div")
    allDiv.removeChild(div)
    localStorage.removeItem(key);

}

function addAffirmation(affirmation) {
    let key = `A:${Date.now()}`
    localStorage.setItem(key, affirmation);
    buildAffirmationsDiv(affirmation, key)
    removeInputField()
}

function removeInputField () {
    let div = document.getElementById("create-input-div")
    while (div.lastChild) {
        div.removeChild(div.lastChild)
    }
}

function buildAddInput() {
    let div = document.getElementById("create-input-div")
    //div.id = 'affirmation-input-div'
    let input = document.createElement("input")
    let button = document.createElement("button")
    button.innerHTML = "Add"
    button.addEventListener("click", () => addAffirmation(input.value))
    //button.addEventListener("click", removeInputField)
    div.appendChild(input)
    div.appendChild(button)
}

window.addEventListener("load", loadAffirmations)

let createMyOwnButton = document.getElementById("create-my-own-button")
createMyOwnButton.addEventListener("click", buildAddInput)