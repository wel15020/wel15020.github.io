const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        let image = document.createElement('img');
        
        
        // h2 ident
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        // dob ident
        dob.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        // pob ident
        pob.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        // img ident
        image.setAttribute('src', prophets[i].imageurl);
        
        


        // add things to the card
        card.appendChild(h2);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(image);
        
        
        document.querySelector('div.cards').appendChild(card);
        
    }
  });

  


