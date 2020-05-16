// nav hamburger 
function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}

// last modified code from main page
// var string = document.lastModified;
// document.getElementById("modified").textContent = `${string}`;
// var date = new Date();
// document.getElementById("year").textContent = date.getDay();

// attempt to get day of week
// var d = new Date();
// var n = d.getDay();

// array for day of week

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    // var n = weekday[d.getDay()];
    document.getElementById("footerDate").textContent = weekday[d.getDay()];
