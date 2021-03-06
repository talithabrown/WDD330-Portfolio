const hikeList = [
    {
      name: 'Bechler Falls',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
      name: 'Teton Canyon',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description: 'Beautiful short (or long) hike through Teton Canyon.',
      directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
      name: 'Denanda Falls',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '7 miles',
      difficulty: 'Moderate',
      description:
        'Beautiful hike through Bechler meadows river to Denanda Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    }

];


class Hikes {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
    }

    createOneHike(hike) {
        const item = document.createElement("li");
        item.className = "liHike"

        item.innerHTML = ` <h2 class="h2Hike">${hike.name}</h2>
              <div class="imageDiv"><img class="img" src="${hike.imgSrc}" alt="${hike.imgAlt}"></div>
              <div class="details">
                      <div>
                          <h3>Distance</h3>
                          <p>${hike.distance}</p>
                      </div>
                      <div>
                          <h3>Difficulty</h3>
                          <p>${hike.difficulty}</p>
                      </div>
              </div>`;
        return item;
    }

    createHikeList(hikeList, parent) {
        hikeList.forEach(hike => {
            parent.appendChild(this.createOneHike(hike));
        });
    }

    showHikeList() {
        const hikeListElement = document.getElementById("hikes");
        hikeListElement.innerHTML = "";
        this.createHikeList(hikeList, hikeListElement);
    }

    showOneHike(hike) {
        this.parentElement.innerHTML = '';
        this.parentElement.appendChild(createOneHikeFull(hike));
    }

}

const myHike = new Hikes("hikes");

window.addEventListener("load", () => {
    myHike.showHikeList();
});





  
