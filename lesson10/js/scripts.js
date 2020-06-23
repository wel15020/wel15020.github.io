// nav hamburger 
function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}
// Home page JSON
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    const townFilter = towns.filter(town => (town.name == 'Preston') || (town.name == 'Fish Haven') || (town.name == 'Soda Springs'));
    
    townFilter.forEach(town => {
        let townSection = document.createElement('section');
        let townDiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        let alt = document.createElement('alt');

        alt.setAttribute('alt', town.name);
        image.setAttribute('src', `images/${town.photo}`);
        h2.textContent = town.name;
        motto.innerHTML = town.motto;
        if (town.name == 'Fish Haven') motto.innerHTML += "<br><br>";
        year.textContent = 'Year Founded: ' + town.yearFounded;
        population.textContent = 'Population: ' + town.currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

        townSection.appendChild(townDiv);
        townDiv.appendChild(h2);
        townDiv.appendChild(motto);
        townDiv.appendChild(year);
        townDiv.appendChild(population);
        townDiv.appendChild(rainfall);
        townSection.appendChild(image);
        townSection.appendChild(alt);


        document.querySelector('div.towns').appendChild(townSection);

    });


  });









// get date for footer
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const d = new Date();
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const year = d.getFullYear();
    const fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
    document.getElementById("footerDate").textContent = fulldate;

    // display event alert if its Friday
    if(days[d.getDay()] == "Friday") {
        document.getElementById("alert").style.display = 'block';
    }
    else {
        document.getElementById("alert").style.display = 'none';
    }