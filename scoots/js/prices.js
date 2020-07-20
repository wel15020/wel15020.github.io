fetch("data/price.json")
  .then(response => response.json())
  .then(json => console.log(json));

