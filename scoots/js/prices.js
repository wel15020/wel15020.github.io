
  const requestURL = 'https://wel15020.github.io/scoots/data/price.json';
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     console.table(jsonObject);  

    
  });