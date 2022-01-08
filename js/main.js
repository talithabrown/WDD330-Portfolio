const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    }
]

for (let i = 0; i < links.length; i++) {
    let listItem = document.createElement('li');

    let a = document.createElement('a');
    a.textContent = links[i].label;
    a.href = links[i].url;

    listItem.appendChild(a);

    let ol = document.querySelector(".ol-links");

    ol.appendChild(listItem);
}