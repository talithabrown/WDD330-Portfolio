//-----------------------Gratitude Page-------------------------------
//--------------------------------------------------------------------

function saveGratitudeLiist() {
    let inputList = []
    inputList.push(document.getElementById("gratitude-date").value)
    inputList.push(document.getElementById("gratitude-input-1").value)
    inputList.push(document.getElementById("gratitude-input-2").value)
    inputList.push(document.getElementById("gratitude-input-3").value)

    localStorage.setItem(`G:${Date.now()}`, `${inputList[0]}:${inputList[1]}:${inputList[2]}:${inputList[3]}`);
}


function loadGratitudeList() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith("G")) {
            let item = localStorage.getItem(localStorage.key(i))
            let list = item.split(":")
            buildGratitudeDiv(list);
        }
    }
}

function buildGratitudeDiv (list) {
    let GratitudeHistoryDiv = document.getElementById("graditude-history-div")

    let hr = document.createElement("hr")
    GratitudeHistoryDiv.appendChild(hr)

    let h3 = document.createElement("h3")
    h3.innerHTML = list[0]
    let ul = document.createElement("ul")
    GratitudeHistoryDiv.appendChild(h3)
    for (let i = 1; i < list.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = list[i]
        ul.appendChild(li)
    }
    GratitudeHistoryDiv.appendChild(ul)
}

window.addEventListener("load", loadGratitudeList);