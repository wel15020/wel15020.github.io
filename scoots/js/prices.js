
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
      let column3 = document.createElement('td');
      let column4 = document.createElement('td');
      let column5 = document.createElement('td');
      let column6 = document.createElement('td');
      let image = document.createElement('td');

      // populate HTML elements
      column1.textContent = prices[i].rentalType;
      column2.textContent = prices[i].maxPersons;
      column3.textContent = prices[i].resHalf;
      column4.textContent = prices[i].resFullday;
      column5.textContent = prices[i].wiHalf;
      column6.textContent = prices[i].wiFullday;
      image.innerHTML = prices[i].imageURL;
    

      // place on page
    data.appendChild(column1);
    data.appendChild(column2);
    data.appendChild(column3);
    data.appendChild(column4);
    data.appendChild(column5);
    data.appendChild(column6);
    data.appendChild(image);


    document.querySelector('tbody.prices').appendChild(data);
     }
  });