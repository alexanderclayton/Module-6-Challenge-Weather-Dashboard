var searchButton = document.getElementById("search-button");

var cityInput = document.getElementById("input");

var recentSearch = document.getElementById("recent-searches");

var cityName = document.getElementById("city-name");
var cityTemp = document.getElementById("city-temp");
var cityWind = document.getElementById("city-wind");
var cityHumidity = document.getElementById("city-humidity");
var cityWeatherPic = document.getElementById("city-weather-image");
var cityWeatherDescription = document.getElementById("city-weather-description");

var fiveDayPull = document.getElementById("5-day-pull");


//give button the value of the name of the city that was searched
//store all recent searches in local storage (array)

//pass event as a parameter to testFunction()
   //IF event is passed in run current testFunction()
   //ELSE 
//create event listener for search button

//pass city name instead of cityInput.value

function testFunction() {
    var cityCoordinatesURL = ('https://api.openweathermap.org/geo/1.0/direct?q=' + cityInput.value + '&limit=5&appid=aa5a9bd886dab3a65130eaa89476e34e')
   
   console.log(cityCoordinatesURL)
    fetch(cityCoordinatesURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            var cityLattitude = data[0].lat;
            var cityLongitude = data[0].lon;
            var searchCityName = data[0].name + ", " + data[0].country;
            cityName.innerHTML = searchCityName;

            var recentSearchButton = document.createElement("button");
            recentSearch.appendChild(recentSearchButton);
            recentSearchButton.innerHTML = searchCityName;
            recentSearchButton.setAttribute("onclick", "recentSearchSearch()");
            recentSearchButton.setAttribute("id", cityLattitude);
            recentSearchButton.setAttribute("title", cityLongitude);
            
            function cityWeather() {
                var cityWeatherURL = ('https://api.openweathermap.org/data/2.5/weather?lat=' + cityLattitude + '&lon=' + cityLongitude + '&appid=aa5a9bd886dab3a65130eaa89476e34e')
                fetch(cityWeatherURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var weatherSection = document.getElementById("weather-section");
                        weatherSection.classList.remove("hidden");
                        var cityWeatherImage = data.weather[0].icon
                        cityWeatherPic.setAttribute("src","https://openweathermap.org/img/wn/" + cityWeatherImage + "@2x.png");
                        cityWeatherDescription.innerHTML = data.weather[0].description
                        cityTemp.innerHTML = "Temp: " + (((data.main.temp) - 273.15) * 9/5 + 32).toFixed(1) + "°F";
                        cityWind.innerHTML = "Wind: " + data.wind.speed + "MPH";
                        cityHumidity.innerHTML = "Humidity: " + data.main.humidity + "%";
                    })
            }

            function fiveDay() {
                var fiveDayPullURL = ('https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLattitude + '&lon=' + cityLongitude + '&appid=aa5a9bd886dab3a65130eaa89476e34e')
                fetch(fiveDayPullURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    var dayOneDate = document.getElementById("day-one-date");
                    dayOneDate.innerHTML = data.list[6].dt_txt;
                    var dayOneImg = document.getElementById("day-one-image");
                    var dayOneWeatherImage = data.list[6].weather[0].icon;
                    dayOneImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayOneWeatherImage + "@2x.png");
                    var dayOneTemp = document.getElementById("day-one-temp");
                    dayOneTemp.innerHTML = "Temp: " + (((data.list[6].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayOneWind = document.getElementById("day-one-wind");
                    dayOneWind.innerHTML = "Wind: " + data.list[6].wind.speed + "MPH";
                    var dayOneHumidity = document.getElementById("day-one-humidity");
                    dayOneHumidity.innerHTML = "Humidity: " + data.list[6].main.humidity + "%";

                    var dayTwoDate = document.getElementById("day-two-date");
                    dayTwoDate.innerHTML = data.list[14].dt_txt;
                    var dayTwoImg = document.getElementById("day-two-image");
                    var dayTwoWeatherImage = data.list[14].weather[0].icon;
                    dayTwoImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayTwoWeatherImage + "@2x.png");
                    var dayTwoTemp = document.getElementById("day-two-temp");
                    dayTwoTemp.innerHTML = "Temp: " + (((data.list[14].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayTwoWind = document.getElementById("day-two-wind");
                    dayTwoWind.innerHTML = "Wind: " + data.list[14].wind.speed + "MPH";
                    var dayTwoHumidity = document.getElementById("day-two-humidity");
                    dayTwoHumidity.innerHTML = "Humidity: " + data.list[14].main.humidity + "%";

                    var dayThreeDate = document.getElementById("day-three-date");
                    dayThreeDate.innerHTML = data.list[22].dt_txt;
                    var dayThreeImg = document.getElementById("day-three-image");
                    var dayThreeWeatherImage = data.list[22].weather[0].icon;
                    dayThreeImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayThreeWeatherImage + "@2x.png");
                    var dayThreeTemp = document.getElementById("day-three-temp");
                    dayThreeTemp.innerHTML = "Temp: " + (((data.list[22].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayThreeWind = document.getElementById("day-three-wind");
                    dayThreeWind.innerHTML = "Wind: " + data.list[22].wind.speed + "MPH";
                    var dayThreeHumidity = document.getElementById("day-three-humidity");
                    dayThreeHumidity.innerHTML = "Humidity: " + data.list[22].main.humidity + "%";

                    var dayFourDate = document.getElementById("day-four-date");
                    dayFourDate.innerHTML = data.list[30].dt_txt;
                    var dayFourImg = document.getElementById("day-four-image");
                    var dayFourWeatherImage = data.list[30].weather[0].icon;
                    dayFourImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayFourWeatherImage + "@2x.png");
                    var dayFourTemp = document.getElementById("day-four-temp");
                    dayFourTemp.innerHTML = "Temp: " + (((data.list[30].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayFourWind = document.getElementById("day-four-wind");
                    dayFourWind.innerHTML = "Wind: " + data.list[30].wind.speed + "MPH";
                    var dayFourHumidity = document.getElementById("day-four-humidity");
                    dayFourHumidity.innerHTML = "Humidity: " + data.list[30].main.humidity + "%";

                    var dayFiveDate = document.getElementById("day-five-date");
                    dayFiveDate.innerHTML = data.list[38].dt_txt;
                    var dayFiveImg = document.getElementById("day-five-image");
                    var dayFiveWeatherImage = data.list[38].weather[0].icon;
                    dayFiveImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayFiveWeatherImage + "@2x.png");
                    var dayFiveTemp = document.getElementById("day-five-temp");
                    dayFiveTemp.innerHTML = "Temp: " + (((data.list[38].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
                    var dayFiveWind = document.getElementById("day-five-wind");
                    dayFiveWind.innerHTML = "Wind: " + data.list[38].wind.speed + "MPH";
                    var dayFiveHumidity = document.getElementById("day-five-humidity");
                    dayFiveHumidity.innerHTML = "Humidity: " + data.list[38].main.humidity + "%";
                })

                }

            cityWeather();
            fiveDay();
        })
    
}

function recentSearchSearch() {
    var newLat = window.event.target.id;
    var newLon = window.event.target.title
    
    var newURL = ('https://api.openweathermap.org/data/2.5/weather?lat=' + newLat + '&lon=' + newLon + '&appid=aa5a9bd886dab3a65130eaa89476e34e')
    fetch(newURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {         
            cityName.innerHTML = data.name + ", " + data.sys.country
            var weatherSection = document.getElementById("weather-section");
            weatherSection.classList.remove("hidden");
            var cityWeatherImage = data.weather[0].icon
            cityWeatherPic.setAttribute("src","https://openweathermap.org/img/wn/" + cityWeatherImage + "@2x.png");
            cityWeatherDescription.innerHTML = data.weather[0].description
            cityTemp.innerHTML = "Temp: " + (((data.main.temp) - 273.15) * 9/5 + 32).toFixed(1) + "°F";
            cityWind.innerHTML = "Wind: " + data.wind.speed + "MPH";
            cityHumidity.innerHTML = "Humidity: " + data.main.humidity + "%";
        });

    var newURLFive = ('https://api.openweathermap.org/data/2.5/forecast?lat=' + newLat + '&lon=' + newLon + '&appid=aa5a9bd886dab3a65130eaa89476e34e')
    fetch(newURLFive)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var dayOneDate = document.getElementById("day-one-date");
            dayOneDate.innerHTML = data.list[6].dt_txt;
            var dayOneImg = document.getElementById("day-one-image");
            var dayOneWeatherImage = data.list[6].weather[0].icon;
            dayOneImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayOneWeatherImage + "@2x.png");
            var dayOneTemp = document.getElementById("day-one-temp");
            dayOneTemp.innerHTML = "Temp: " + (((data.list[6].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
            var dayOneWind = document.getElementById("day-one-wind");
            dayOneWind.innerHTML = "Wind: " + data.list[6].wind.speed + "MPH";
            var dayOneHumidity = document.getElementById("day-one-humidity");
            dayOneHumidity.innerHTML = "Humidity: " + data.list[6].main.humidity + "%";

            var dayTwoDate = document.getElementById("day-two-date");
            dayTwoDate.innerHTML = data.list[14].dt_txt;
            var dayTwoImg = document.getElementById("day-two-image");
            var dayTwoWeatherImage = data.list[14].weather[0].icon;
            dayTwoImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayTwoWeatherImage + "@2x.png");
            var dayTwoTemp = document.getElementById("day-two-temp");
            dayTwoTemp.innerHTML = "Temp: " + (((data.list[14].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
            var dayTwoWind = document.getElementById("day-two-wind");
            dayTwoWind.innerHTML = "Wind: " + data.list[14].wind.speed + "MPH";
            var dayTwoHumidity = document.getElementById("day-two-humidity");
            dayTwoHumidity.innerHTML = "Humidity: " + data.list[14].main.humidity + "%";

            var dayThreeDate = document.getElementById("day-three-date");
            dayThreeDate.innerHTML = data.list[22].dt_txt;
            var dayThreeImg = document.getElementById("day-three-image");
            var dayThreeWeatherImage = data.list[22].weather[0].icon;
            dayThreeImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayThreeWeatherImage + "@2x.png");
            var dayThreeTemp = document.getElementById("day-three-temp");
            dayThreeTemp.innerHTML = "Temp: " + (((data.list[22].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
            var dayThreeWind = document.getElementById("day-three-wind");
            dayThreeWind.innerHTML = "Wind: " + data.list[22].wind.speed + "MPH";
            var dayThreeHumidity = document.getElementById("day-three-humidity");
            dayThreeHumidity.innerHTML = "Humidity: " + data.list[22].main.humidity + "%";

            var dayFourDate = document.getElementById("day-four-date");
            dayFourDate.innerHTML = data.list[30].dt_txt;
            var dayFourImg = document.getElementById("day-four-image");
            var dayFourWeatherImage = data.list[30].weather[0].icon;
            dayFourImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayFourWeatherImage + "@2x.png");
            var dayFourTemp = document.getElementById("day-four-temp");
            dayFourTemp.innerHTML = "Temp: " + (((data.list[30].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
            var dayFourWind = document.getElementById("day-four-wind");
            dayFourWind.innerHTML = "Wind: " + data.list[30].wind.speed + "MPH";
            var dayFourHumidity = document.getElementById("day-four-humidity");
            dayFourHumidity.innerHTML = "Humidity: " + data.list[30].main.humidity + "%";

            var dayFiveDate = document.getElementById("day-five-date");
            dayFiveDate.innerHTML = data.list[38].dt_txt;
            var dayFiveImg = document.getElementById("day-five-image");
            var dayFiveWeatherImage = data.list[38].weather[0].icon;
            dayFiveImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dayFiveWeatherImage + "@2x.png");
            var dayFiveTemp = document.getElementById("day-five-temp");
            dayFiveTemp.innerHTML = "Temp: " + (((data.list[38].main.temp - 273.15) * 9/5 + 32).toFixed(1) + "°F");
            var dayFiveWind = document.getElementById("day-five-wind");
            dayFiveWind.innerHTML = "Wind: " + data.list[38].wind.speed + "MPH";
            var dayFiveHumidity = document.getElementById("day-five-humidity");
            dayFiveHumidity.innerHTML = "Humidity: " + data.list[38].main.humidity + "%";
        })
}

//Search doesn't work on page load
    //^^FIX: added generated search URL inside the search function
//cannot search more than 1 city per refresh
    //^^FIX: added generated search URL inside the search function
//search seems to run the last value in the input field...
    //^^FIX: added generated search URL inside the search function
//do I have the correct time for all my weather pulls?  Looks like night?