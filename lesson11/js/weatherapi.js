


const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=470ee5d5e719e7a5318dbf1830b0a4d8";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
    
    var kTemp = jsObject.list[0].main.temp;
    //console.log(kTemp);

    valNum = parseFloat(kTemp);
    //console.log(valNum);

    valNum = ((valNum-273.15)*1.8)+32;
    //console.log(valNum);

    var fixedNum = valNum.toFixed(0)

    document.getElementById('current-temp').textContent = fixedNum;
    
    
    
    //Images
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

  });

