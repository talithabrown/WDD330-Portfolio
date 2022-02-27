let htmlPeopleUl = document.getElementById("people-list")

let nextUrl = ""
let previousUrl = ""


function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(data => {
            showList(data);
            nextUrl = data.next;
            previousUrl = data.previous;
        });
}

// fetch('https://swapi.dev/api/people/')
//         .then(response => response.json())
//         //.then(data => console.log(data))
//         .then(data => {
//             showList(data);
//             nextUrl = data.next;
//             previousUrl = data.previous;
//         });

function showList(data) {
    for (let i = 0; i < data.results.length; i++) {
        let li = document.createElement("li");
        li.textContent = data.results[i].name;
        li.id = data.results[i].url
        li.addEventListener("click", fetchFullDetails)
        htmlPeopleUl.appendChild(li);
    }
}

function removeList() {
    while (htmlPeopleUl.lastChild) {
        htmlPeopleUl.lastChild.remove()
    }
}

function showRequested(url) {
    if (url != "" && url != null) {
        removeList();
        fetchData(url);
    }
}

function testing(event) {
    newData = fetchFullDetails(event);

}

function fetchFullDetails(event) {
    let url = event.currentTarget.id
    fetch(url)
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(data => { newData = data
            //console.log(data)
            showFullDetails(data);
        });
    //return newData
}

function showFullDetails(data) {
    let ul = document.createElement("ul")
    for (let i = 0; i < 3; i++) {
        let li = document.createElement("li")
        li.textContent = data.birth_year
        ul.appendChild(li)
    }
    console.log(ul)
}


let htmlPreviosButton = document.getElementById("previous-button")
let htmlNextButton = document.getElementById("next-button")

htmlPreviosButton.addEventListener("click", () => showRequested(previousUrl))
htmlNextButton.addEventListener("click", () => showRequested(nextUrl))

window.addEventListener("load", fetchData('https://swapi.dev/api/people/'))


