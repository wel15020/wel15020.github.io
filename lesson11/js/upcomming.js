
// Town Data JSON for upcomming events
const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const events = towns.filter(town => (town.name == 'Preston'));

    events.forEach(town => {
        let eachTown = document.createElement('article');
        let h3 = document.createElement('h3');
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');

        h3.innerHTML = `Upcoming Events`;
        eachTown.appendChild(h3);
        eachTown.appendChild(ul);



        li1.innerHTML = `${town.events[0]}`;
        ul.appendChild(li1);

        li2.innerHTML = `${town.events[1]}`;
        ul.appendChild(li2);

        li3.innerHTML = `${town.events[2]}`;
        ul.appendChild(li3);



        document.querySelector('section.events').appendChild(eachTown);
   });




});