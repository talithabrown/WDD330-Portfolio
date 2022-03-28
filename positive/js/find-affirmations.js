import affirmationsList from "../js/affirmation_storage.js"

function getAffirmations() {
    let allDiv = document.getElementById("all-affirmations")
    for (let i = 0; i < affirmationsList.affirmations.length; i++) {
        let hr = document.createElement("hr")

        let div = document.createElement("div")
        div.classList.add("single-affirmation-div")
        let p = document.createElement("p")
        p.innerHTML = affirmationsList.affirmations[i].text

        let button = document.createElement("button")
        button.innerHTML = "add"
        button.setAttribute("data-toggle", "add")

        for (var item = 0; item < localStorage.length; item++) {
            if (localStorage.key(item).startsWith("A")) {
                if (localStorage.getItem(localStorage.key(item)) === p.innerHTML) {
                    button.innerHTML = "remove"
                    button.setAttribute("data-toggle", "remove")
                }     
            }
        }

        button.addEventListener("click", () => toggleButton(p, button))

        div.appendChild(hr)
        div.appendChild(p)
        div.appendChild(button)
        allDiv.appendChild(div)
    }
}

function toggleButton(p, button) {
    if (button.getAttribute("data-toggle") === "add") {
        addAffirmation(p, button)
        button.setAttribute("data-toggle", "remove")
        button.innerHTML = "remove"
    } else if (button.getAttribute("data-toggle") === "remove") {
        removeAffirmation(p)
        button.setAttribute("data-toggle", "add")
        button.innerHTML = "add"
    }
}

function addAffirmation(p) {
    let key = `A:${Date.now()}`
    localStorage.setItem(key, p.innerHTML);
    p.setAttribute("data-key", key)
}

function removeAffirmation(p) {
    let key = p.getAttribute("data-key")
    localStorage.removeItem(key);
}

window.addEventListener("load", getAffirmations)