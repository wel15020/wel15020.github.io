// nav hamburger 
function toggleMenu() {
 
    document.getElementById("primaryNav").classList.toggle("hide");
}
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