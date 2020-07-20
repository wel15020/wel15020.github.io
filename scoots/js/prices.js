
  const requestURL = 'https://wel15020.github.io/scoots/data/price.json';
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     console.table(jsonObject);  
     const prices = jsonObject["prices"];
     for (let i = 0; i < prics.length; i++ ) {
      
      let div = document.createElement('div');
      let h2 = document.createElement('h2');

      h2.textContent = prices[i].rentalType;

    div.appendChild(h2);

    document.querySelector('div.prices').appendChild(div);
    
  });