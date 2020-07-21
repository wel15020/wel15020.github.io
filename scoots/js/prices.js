
  const requestURL = 'https://wel15020.github.io/scoots/data/price.json';
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     console.table(jsonObject);  
     const prices = jsonObject["prices"];
     for (let i = 0; i < prices.length; i++ ) {
      
      // identify the  HTML elements needed
      let data = document.createElement('tr');
      let column1 = document.createElement('td');
      let column2 = document.createElement('td');

      // populate HTML elements
      column1.textContent = prices[i].rentalType;
      column2.textContent = prices[i].maxPersons;

      // place on page
    data.appendChild(column1);
    data.appendChild(column2);

    document.querySelector('tbody.prices').appendChild(data);
     }
  });