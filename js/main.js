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
    },
    {
      label: "Week 4 code example",
      url: "week4/code_exercises/index.html"
    },
    {
      label: "Week 4 team assignment",
      url: "week4/tictactoe/tictactoe.html"
    },
    {
      label: "Week 5 code example",
      url: "week5/code_exercise/index.html"
    },
    {
      label: "Week 5 team assignment",
      url: "week5/team_assignment/index.html"
    },
    {
      label: "Week 6 ToDo List",
      url: "todo/index.html"
    },
    {
      label: "Week 7 code example",
      url: "week7/code-example/index.html"
    },
    {
      label: "Week 8 code example",
      url: "week8/code-example/index.html"
    },
    {
      label: "Week 8 team assignment",
      url: "week8/team/index.html"
    },
    {
      label: "Week 9 code example",
      url: "week9/code-example/index.html"
    },
    {
      label: "Week 9 team assignment",
      url: "week9/team/index.html"
    },
    {
      label: "Week 10 code example",
      url: "week10/code-example/index.html"
    },
    {
      label: "Week 10 team assignment",
      url: "week10/team/index.html"
    },
    {
      label: "Week 11 team assignment",
      url: "week11/client/week11.html"
    },
    {
      label: "Final Project",
      url: "positive/index.html"
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