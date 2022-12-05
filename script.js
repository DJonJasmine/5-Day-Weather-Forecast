const weatherContainer = document.querySelector('.container');
const temp = document.querySelector('.temp');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const condition = document.querySelector('.condition');
const cityName = document.querySelector('.cityName');
const icon = document.querySelector('.icon');
const sun = document.querySelector('.sun');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const locationSearch = document.querySelector('.locationSearch');
const search = document.querySelector('.search')
const btn = document.querySelector('.submit')
const cities = document.querySelector('city')

//Default city on load page
let cityInput = 'Los Angeles'

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;

        fetchWeatherData();

        app.style.opacity = "0"
    })
});

form.addEventListener('sumbit', (e) => {
    if(search.value.length === 0) {
        alert('Please type in a city name')
    } else {
        cityInput = search.val()
        fetchWeatherData()
        search.value = ''
        app.style.opacity = "0"
    }

    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    return weekday[new Date(`${day}/${month}/${year}`)]
};

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}=${cityInput}`)
    .then(response => response.json())
    .then(data => {
    //  console.log(data);
     
     temp.innerHTML = data.current.temp_c + "&#176"
     condition.innerHTML = data.current.condition.text;
     
     const date = data.location.localtime;
     const y = parseInt(date.substr(0, 4));
     const m = parseInt(date.substr(5, 2));
     const d = parseInt(date.substr(8, 3));
     const time = date.substr(11);

     date.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m}, ${y}`
    })
    

}

