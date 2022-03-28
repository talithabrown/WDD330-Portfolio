import journalPrompts from "../js/journal_prompts.js"

function getJournalPrompt() {
    let randomNumber = Math.floor(Math.random() * 31);
    return journalPrompts.prompts[randomNumber].text
}

function displayPrompt() {
    let textarea = document.getElementById("prompt-textarea")
    textarea.value = getJournalPrompt()
}

function saveEntry() {
    let prompt = document.getElementById("prompt-textarea").value
    let entry = document.getElementById("journal-textarea").value
    let date = document.getElementById("journal-entry-date").value

    localStorage.setItem(`J:${Date.now()}`, `${date}:${prompt}:${entry}`);
}

function loadEntryList() {
    for (var i = 0; i < localStorage.length; i++) {
        let list = []
        if (localStorage.key(i).startsWith("J")) {
            let item = localStorage.getItem(localStorage.key(i))
            list = item.split(":")
            buildEntryDiv(list);
        }
    }
}

function buildEntryDiv(list) {
    let div = document.createElement("div")
    let hr = document.createElement("hr")
    div.appendChild(hr)
    for (let i = 0; i < list.length; i++) {
        let p = document.createElement("p")
        p.innerHTML = list[i]
        div.appendChild(p)
    }
    let main = document.getElementById("journal-main")
    main.appendChild(div)
}


let generatePromptButton = document.getElementById("generate-prompt")
generatePromptButton.addEventListener('click', displayPrompt)

window.addEventListener('load', loadEntryList)

let journalForm = document.getElementById("journal-form")
journalForm.addEventListener("submit", saveEntry)