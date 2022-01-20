const links = [
    {
      label: "Week 1 code example",
      url: "week1/index.html"
    },
    {
      label: "Week 2 code example",
      url: "week2/index.html"
    },
    {
      label: "Week 2 team assignment",
      url: "week2/team-assignment/index.html"
    },
    {
      label: "Week 3 code example",
      url: "week3/index.html"
    },
    {
      label: "Week 3 team assignment",
      url: "week3/array-cardio-day-1.html"
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