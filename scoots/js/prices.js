fetch("https://wel15020.github.io/scoots/data/price.json")
  .then(response => response.json())
  .then(json => console.log(json));

